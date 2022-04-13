import { ref, update } from "firebase/database";
import { useCallback } from "react";
import { FaDoorClosed } from "react-icons/fa";
import { IoCopy } from "react-icons/io5";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { CopyButton, DeleteButton } from "../../pages/Room/styles";
import { database } from "../../services/firebase";
import { Container } from "./styles";

import swal from "sweetalert";
import Tooltip from "@mui/material/Tooltip";
import { Fade } from "@mui/material";

type HeaderProps = {
  id: string | undefined;
};

export const Header = ({ id }: HeaderProps) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleCloseRoom = (id: string | undefined) => {
    const roomRef = ref(database, `rooms/${id}`);

    swal("Hey, this will remove your room 😐", "Are you sure?", {
      icon: "error",
      buttons: ["NAAAH", "OOOOH, YESS!"],
      dangerMode: true,
    }).then((value) => {
      if (value === true) {
        update(roomRef, {
          closedAt: new Date(),
        }).then(() => {
          navigate("/");
          toast.success("Your journey has ended succesfuly. Thank you. ❤️");
        });
      }
    });
  };

  const handleCopyClipboard = useCallback(() => {
    navigator.clipboard.writeText(String(id));
    return toast.info("Copied to clipboard.  😊", {
      position: "bottom-center",
    });
  }, [id]);

  const handleRedirectHome = () => {
    navigate(`/${id}`);
  };
  if (pathname === `/admin/${id}`) {
    return (
      <Container>
        <span onClick={handleRedirectHome}>42.</span>
        <div className="IconsCopyClose">
          <CopyButton onClick={handleCopyClipboard}>
            <span>{id}</span>
            <IoCopy className="icon-copy" />
          </CopyButton>

          <DeleteButton
            onClick={() => {
              handleCloseRoom(id);
            }}
          >
            <span>Encerrar Sala</span>
            <FaDoorClosed className="close-room" />
          </DeleteButton>
        </div>
      </Container>
    );
  } else {
    return (
      <Container>
        <Tooltip 
          title="Go Home 🚀"
          arrow
          followCursor={true}
          TransitionComponent={Fade}
          TransitionProps={{ timeout: 600 }}
        >
          <span onClick={handleRedirectHome}>42.</span>
        </Tooltip>
        <CopyButton onClick={handleCopyClipboard}>
          <span>{id}</span>
          <IoCopy className="icon-copy" />
        </CopyButton>
      </Container>
    );
  }
};
