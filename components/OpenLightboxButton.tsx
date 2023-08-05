"use client";

import React, { useState } from "react";
import Box from "@mui/material/Box";
import Image from "next/image";

import OpenInFullIcon from "@mui/icons-material/OpenInFull";

interface IOpenLightboxButton {
  einklappen: string;
  ausklappen: string;
}

const OpenLightboxButton: React.FunctionComponent<IOpenLightboxButton> = ({
  einklappen = "Einklappen",
  ausklappen = "Ausklappen",
}) => {
  const [lighbox, setLightbox] = useState(false);

  return (
    <>
      <Box
        display={{ xs: "block", sm: "none" }}
        sx={{
          height: lighbox ? "350px" : "150px",
          width: "100%",
          mt: "20px",
          overflow: "hidden",
          transition: "all 0.4s ease-in-out",
        }}
      >
        <Box
          sx={{
            position: "relative",
            height: "260px",
            width: "260px",
            float: "right",
            transform: "translateX(35px)",
          }}
        >
          <Image src="/urea-main.png" alt="" fill objectFit="contain"></Image>
        </Box>
        <Box
          onClick={() => {
            setLightbox(lighbox ? false : true);
          }}
          sx={{
            position: "absolute",
            bottom: "20px",
            cursor: "pointer",
            border: "1.5px solid #EEC817",
            height: "30px",
            width: "30px",
          }}
        >
          <OpenInFullIcon
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translateY(-50%) translateX(-50%)",
              color: "#EEC817",
            }}
          />
          <Box
            className="testclassforme"
            sx={{
              position: "absolute",
              height: "30px",
              width: "auto",
              px: "10px",
              left: "28px",
              top: "-1.5px",
              backgroundColor: "#EEC817",
              lineHeight: "28px",
              fontFamily: "Blinker",
              color: "white",
              fontWeight: "500",
            }}
          >
            {lighbox ? einklappen : ausklappen}
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default OpenLightboxButton;
