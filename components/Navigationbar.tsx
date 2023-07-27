"use client";

import React, { useState, useEffect } from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  ClickAwayListener,
  Grow,
  MenuItem,
  MenuList,
  Paper,
  Popper,
  Typography,
} from "@mui/material";
import Image from "next/image";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import Link from "next-intl/link";
import Fade from "@mui/material/Fade";
import MenuIcon from "@mui/icons-material/Menu";
import LanguageIcon from "@mui/icons-material/Language";
import CallIcon from "@mui/icons-material/Call";
import { Boy, WidthFull } from "@mui/icons-material";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface INavigationbar {
  children: any;
}

const Navigationbar: React.FunctionComponent<INavigationbar> = ({
  children,
}) => {
  const [show, setShow] = useState(false);
  const [sidebar, setSidebar] = useState(false);

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);
  const anchorRef2 = React.useRef<HTMLButtonElement>(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: Event | React.SyntheticEvent) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  return (
    <Box
      px={{ xs: "24px", md: "28px" }}
      sx={{
        zIndex: "100",
        position: "fixed",
        height: "70px",
        width: "100%",
        backgroundColor: "white",
      }}
    >
      {/*
       HERE THE SIDEBAR START 
       
       */}
      <Box
        display={{ xs: "block", md: "none" }}
        sx={{
          position: "absolute",
          right: "0px",
          top: "70px",
          width: "100%",
          height: "0px",
        }}
      >
        <Box
          onClick={() => {
            setSidebar(false);
          }}
          sx={{
            position: "absolute",
            right: sidebar ? "0px" : "100%", // no transition here
            width: "100%",
            height: "100vh",
            backgroundColor: sidebar ? "rgba(0,0,0,0.3)" : "rgba(0,0,0,0)", // transition here
            transition: "background-color ease-in-out 0.4s",
          }}
        ></Box>
        <Stack
          direction="column"
          sx={{
            position: "absolute",
            right: sidebar ? "0px" : "-350px", // transition here
            width: "350px",
            height: "100vh",
            backgroundColor: "#E7EED8",
            transition: "right ease-in-out 0.2s",
            padding: "25px 50px",
            "&>h5": {
              fontSize: "1.525rem",
              cursor: "pointer",
            },
            '& > div[data-delimeter="true"]': {
              maxWidth: "868px",
              mx: "auto",
              my: "10px",
              width: "100%",
              py: "1px",
              borderBottom: "0.5px solid #DCE4CA",
            },
            "& > div:nth-child(1)": {
              width: "100%",
              pb: "2px",
              mb: "30px",
              borderBottom: "none",
            },
          }}
        >
          <Box
            onClick={() => {
              setSidebar(false);
            }}
            sx={{
              cursor: "pointer",
              height: "40px",
              width: "auto",
              "&>p": {
                color: "#080844",
                display: "inline",
                pr: "7px",
              },
              "&>*:nth-child(2)": {
                color: "#080844",
                fontSize: "1.325rem",
                transform: "translateY(5.5px)",
              },
            }}
          >
            <Typography variant="body1">Schließen</Typography>
            <CancelOutlinedIcon />
          </Box>

          <Typography
            onClick={() => {
              setSidebar(false);
            }}
            variant="h5"
          >
            Startseite
          </Typography>
          <Box data-delimeter="true"></Box>
          <Typography
            onClick={() => {
              setSidebar(false);
            }}
            variant="h5"
          >
            Nachricht schreiben
          </Typography>
          <Box data-delimeter="true"></Box>
          <Typography
            onClick={() => {
              setSidebar(false);
            }}
            variant="h5"
          >
            Bestellen
          </Typography>
          <Box data-delimeter="true"></Box>

          <Box
            sx={{
              height: "auto",
              my: "-10px",
              "& p": {
                fontSize: "1.125rem",
                color: "#080844",
                py: "3px",
                transform: "translateY(-10px)",
              },
              "& a": {
                textDecoration: "none",
                color: "#080844",
              },
            }}
          >
            <Accordion
              sx={{
                background: "none",
                boxShadow: "none",
                margin: "0px",
                height: "auto",
                width: "auto",
                my: "0px",
                transform: "transformY(20px)",
                "&::before": {
                  height: "0px",
                },
                "&.MuiAccordionSummary-content Mui-expanded": {
                  marginTop: "0px",
                  marginBottom: "0px",
                },
              }}
              disableGutters={true}
            >
              <AccordionSummary
                sx={{
                  px: "0px",
                }}
                expandIcon={<ExpandMoreIcon />}
              >
                <Typography fontSize="1.525rem" variant="h5">
                  Sprache ändern
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  marginBottom: "-14px",
                }}
              >
                <Typography>
                  <Link href="/" locale="en">
                    English
                  </Link>
                </Typography>
                <Typography>
                  <Link href="/" locale="de">
                    Deutsch
                  </Link>
                </Typography>
                <Typography>
                  <Link href="/" locale="es">
                    Español
                  </Link>
                </Typography>
                <Typography>
                  <Link href="/" locale="fr">
                    Francais
                  </Link>
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
          <Box data-delimeter="true"></Box>
          <Typography
            onClick={() => {
              setSidebar(false);
            }}
            variant="h5"
          >
            Kontakt
          </Typography>
        </Stack>
      </Box>
      {/* 
      
      HERE THE SIDEBAR END
       */}

      <Stack
        direction="row"
        alignItems="center"
        sx={{
          maxWidth: "980px",
          width: "100%",
          mx: "auto",
        }}
      >
        <Stack
          direction="row"
          sx={{
            position: "relative",
            padding: "4px",
          }}
        >
          <Box
            sx={{
              height: "60px",
              width: "60px",
              position: "relative",
              "&>img": {
                transform: "translateX(-10px)",
              },
            }}
          >
            <Image
              src="/logo-colorful.png"
              layout="fill"
              alt=""
              objectFit="contain"
            />
          </Box>
          <Box
            sx={{
              transform: "translateX(-10px)",
              pt: "3.5px",
              "& > p": {
                fontWeight: 600,
                fontSize: "1.125rem",
                fontFamily: "Blinker",
                lineHeight: "1px",
                color: "black",
              },
              "& > p:nth-child(2)": {
                fontWeight: 500,
                fontSize: "0.825rem",
                fontFamily: "Blinker",
                lineHeight: "1px",
                color: "black",
              },
            }}
          >
            <p>G.P.E.</p>
            <p>Global Pacific Energy</p>
          </Box>
        </Stack>

        <Box
          display={{
            xs: "block",
            md: "none",
          }}
          sx={{
            ml: "auto",
            transform: "translateY(5px)",
            height: "100%",
            position: "relative",
            "&>*": {
              color: "black",
              fontSize: "1.625rem",
              mx: "12px",
            },
            "&>*:nth-child(1)": {
              color: "black",
            },
            "&>*:nth-child(2)": {
              color: "black",
            },
            "&>*:nth-child(3)": {
              fontSize: "1.7rem",
              mr: "2px",
              color: "black",
            },
          }}
        >
          <a href="tel:+499123456789">
            <CallIcon />
          </a>
          <Box
            sx={{
              display: "inline-flex",
              background: "none",
            }}
            ref={anchorRef}
            id="composition-button"
            aria-controls={open ? "composition-menu" : undefined}
            aria-expanded={open ? "true" : undefined}
            aria-haspopup="true"
            onClick={handleToggle}
          >
            <LanguageIcon />
          </Box>
          <Box
            sx={{
              display: "inline-block",
              background: "none",
              marginLeft: "-4px",
            }}
          >
            <Popper
              open={open}
              anchorEl={anchorRef.current}
              role={undefined}
              placement="bottom"
              transition
              disablePortal
            >
              {({ TransitionProps, placement }) => (
                <Grow {...TransitionProps}>
                  <Paper>
                    <ClickAwayListener onClickAway={handleClose}>
                      <MenuList
                        sx={{
                          marginTop: "10px",
                          "& a": {
                            textDecoration: "none",
                            color: "#080844",
                          },
                        }}
                        autoFocusItem={open}
                        id="composition-menu"
                        aria-labelledby="composition-button"
                        onKeyDown={handleListKeyDown}
                      >
                        <MenuItem onClick={handleClose}>
                          <Link href="/" locale="en">
                            English
                          </Link>
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                          <Link href="/" locale="de">
                            Deutsch
                          </Link>
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                          <Link href="/" locale="es">
                            Español
                          </Link>
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                          <Link href="/" locale="fr">
                            Francais
                          </Link>
                        </MenuItem>
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
          </Box>
          <MenuIcon
            onClick={() => {
              setSidebar(!sidebar);
            }}
          />
        </Box>

        {children.map((elem: any, index: number, arr: any) => {
          return (
            <Box
              display={{ xs: "none", md: "block" }}
              key={index + "_nav-item-key"}
              sx={{
                cursor: "pointer",
                marginLeft: index === arr.length - 1 ? "auto" : "25px",
                position: "relative",
              }}
            >
              {index < arr.length - 1 && elem}

              {index === arr.length - 1 && (
                <>
                  <Box
                    sx={{
                      display: "inline-flex",
                    }}
                    ref={anchorRef2}
                    id="composition-button"
                    aria-controls={open ? "composition-menu" : undefined}
                    aria-expanded={open ? "true" : undefined}
                    aria-haspopup="true"
                    onClick={handleToggle}
                  >
                    <Typography
                      variant="body1"
                      sx={{
                        top: "0px",
                        height: "100%",
                        zIndex: "100",
                      }}
                    >
                      Sprache
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "inline-block",
                      background: "none",
                      marginLeft: "-4px",
                    }}
                  >
                    <Popper
                      open={open}
                      anchorEl={anchorRef2.current}
                      role={undefined}
                      placement="bottom"
                      transition
                      disablePortal
                    >
                      {({ TransitionProps, placement }) => (
                        <Grow {...TransitionProps}>
                          <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                              <MenuList
                                sx={{
                                  marginTop: "10px",
                                  "& a": {
                                    textDecoration: "none",
                                    color: "#080844",
                                  },
                                }}
                                autoFocusItem={open}
                                id="composition-menu"
                                aria-labelledby="composition-button"
                                onKeyDown={handleListKeyDown}
                              >
                                <MenuItem onClick={handleClose}>
                                  <Link href="/" locale="en">
                                    English
                                  </Link>
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                  <Link href="/" locale="de">
                                    Deutsch
                                  </Link>
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                  <Link href="/" locale="es">
                                    Español
                                  </Link>
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                  <Link href="/" locale="fr">
                                    Francais
                                  </Link>
                                </MenuItem>
                              </MenuList>
                            </ClickAwayListener>
                          </Paper>
                        </Grow>
                      )}
                    </Popper>
                  </Box>
                </>
              )}
            </Box>
          );
        })}
        <Box display={{ xs: "none", md: "block" }}>
          <ArrowDropDownRoundedIcon
            sx={{
              opacity: "0.75",
              fontSize: "1.25rem",
              transform: "translateY(4.76px)",
            }}
          />
        </Box>
      </Stack>
    </Box>
  );
};

export default Navigationbar;
