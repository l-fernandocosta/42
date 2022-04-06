import astronaut from "../../assets/astronaut.png";
import cachalote from "../../assets/cachalote.png";

import { Container, Dot, FormId, SubmitButton } from "../Home/styles";

import { GiTowel } from "react-icons/gi";
import { Anchor, Title, WhaleImg } from "./styles";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/UserContext";
import { FormEvent, useState } from "react";
import { getDatabase, push, ref, set } from "firebase/database";
import { toast } from "react-toastify";

export function NewChat() {
  const { user } = useAuth();
  const [newRoomInput, setNewRoomInput] = useState("");
  const navigate = useNavigate();

  const handleNewRoom = async (e: FormEvent) => {
    e.preventDefault();

    if (newRoomInput.trim() === "") {
      toast.error("😒 Hey, write something, dude. ");
      return;
    } else {
      const db = getDatabase();

      const roomRef = ref(db, "rooms");
      const newRoomRef = push(roomRef);
      set(newRoomRef, {
        author: {
          name: user?.name,
          authorId: user?.uid,
          avatar: user?.photo,
          email: user?.email, 
        },
        title: newRoomInput,
      }).then(() => {
        navigate(`/${newRoomRef.key}`);
        toast.success("Welcome, traveller. ");
      });
    }
  };

  return (
    <Container>
      <aside>
        <Dot></Dot>
        <Dot></Dot>

        <img src={astronaut} alt="SPACE WALLPAPER" />
        <p>
          JUST MAKE THE <span>RIGHT</span> QUESTION<span>.</span> <br />
          BUT <span>DON'T PANIC!</span>
        </p>
      </aside>

      <main>
        <div>
          <WhaleImg src={cachalote} />
          <h1>NEW JOURNEY AS</h1>
          <Title>{user?.name?.toUpperCase()} 🚀</Title>
        </div>

        <FormId onSubmit={handleNewRoom}>
          <input
            type="text"
            id="room-id"
            placeholder="Create a new ID room"
            onChange={(e) => setNewRoomInput(e.target.value)}
            value={newRoomInput}
          />

          <SubmitButton type="submit">
            TAKE THE TOWEL
            <GiTowel size={"35px"} className="towel" />
          </SubmitButton>
        </FormId>

        <Link to={"/"}>
          <Anchor>Already have a room id?</Anchor>
        </Link>
      </main>
    </Container>
  );
}
