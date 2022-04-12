import astronaut from "../../assets/astronaut.png";

import { Container, Dot, FormId, GoogleButton, SubmitButton } from "./styles";

import { GiTowel, GiAstronautHelmet } from "react-icons/gi";
import { CgGoogle } from "react-icons/cg";

import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/UserContext";
import { toast } from "react-toastify";
import { FormEvent, useState } from "react";
import { child, get, ref } from "firebase/database";
import { database } from "../../services/firebase";
import swal from "sweetalert";

export function Home() {
  let navigate = useNavigate();
  const { loginWithGoogle, isLoading, user } = useAuth();
  const [inputRoom, setInputRoom] = useState("");

  async function handleCreateRoom() {
    if (user === undefined) {
      loginWithGoogle()
        .then(() => navigate("/room/new"))
        .then(() => toast.success("Welcome, SpaceTraveller 🚀 "));
    } else {
      navigate("/room/new");
    }
  }

  async function handleJoinRoom(e: FormEvent) {
    e.preventDefault();

    if (inputRoom.trim() === "") {
      toast.error("👨‍🚀 Please, type some valid room ID. ");
      return;
    } else {
      const roomRef = ref(database);
      get(child(roomRef, `rooms/${inputRoom}`)).then((snapshot) => {
        if (snapshot.hasChild("closedAt")) {
          swal(
            "YOU SHAAALL NOT PASS 🧙",
            `It looks like this room has already been closed. 
                Do you wanna start a new question journey?
            `,
            {
              dangerMode: true,
              icon: "error",
              buttons: ["No, i'm weak", "AW YESSS!"],
            }
          ).then((value) => {
            if (value === true) {
              if (!user) {
                swal(
                  "You doesn't logged yet !",
                  "Login using a google account",
                  {
                    buttons: ["I'm not ready", "Login"],
                    dangerMode: true,
                    icon: "info",
                  }
                ).then((value) => {
                  if (value === true) {
                    loginWithGoogle().then(() => {
                      navigate("/room/new");
                    });
                  }
                });
              } else {
                navigate("/room/new");
              }
            } else {
              return;
            }
          });
          return;
        }
        if (snapshot.exists()) {
          navigate(`/${inputRoom}`);
        } else {
          toast.error(
            "🛰 Hey, I'm pretty sure that this room doesn't exists, Bro. "
          );
        }
      });
    }
  }

  return (
    <Container>
      <aside>
        <img id="astronaut" src={astronaut} alt="SPACE WALLPAPER" />
        <p>
          JUST MAKE THE <span>RIGHT</span> QUESTION<span>.</span> <br />
          BUT <span>DON'T PANIC!</span>
        </p>
        <Dot></Dot>
        <Dot></Dot>
      </aside>

      <main>
        <div>
          <span>42</span>
          {!user ? (
            <GoogleButton disabled={isLoading} onClick={handleCreateRoom}>
              <CgGoogle className={"googleIcon"} size={"25px"} />
              LOGIN WITH GOOGLE
            </GoogleButton>
          ) : (
            <GoogleButton onClick={handleCreateRoom}>
              <GiAstronautHelmet className={"googleIcon"} size={"30px"} />{" "}
              CREATE A NEW ROOM
            </GoogleButton>
          )}
        </div>
        <div> - or join a room - </div>

        <FormId onSubmit={handleJoinRoom}>
          <input
            type="text"
            id="room-id"
            /*    maxLength={10} */
            placeholder="Type the ID room"
            value={inputRoom}
            onChange={(e) => setInputRoom(e.target.value)}
          />
          <SubmitButton type="submit">
            <GiTowel size={"35px"} className="towel" />
            TAKE THE TOWEL
          </SubmitButton>
        </FormId>
      </main>
    </Container>
  );
}
