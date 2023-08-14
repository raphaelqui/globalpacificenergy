"use client";

import React, { useState, useEffect } from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextareaAutosize,
} from "@mui/material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  ClickAwayListener,
  Grid,
  Grow,
  MenuItem,
  MenuList,
  Paper,
  Popper,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Image from "next/image";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import Link from "next-intl/link";
import Fade from "@mui/material/Fade";
import MenuIcon from "@mui/icons-material/Menu";
import LanguageIcon from "@mui/icons-material/Language";
import CallIcon from "@mui/icons-material/Call";
import { Boy, SetMealOutlined, WidthFull } from "@mui/icons-material";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TextField from "@mui/material/TextField";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
interface INavigationbar {
  translations: any;
}

const Navigationbar: React.FunctionComponent<INavigationbar> = ({
  translations,
}) => {
  const [sidebar, setSidebar] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [modal, setModal] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);
  const [send, setSend] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      if (window.innerWidth < 370) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    }, 10);
    addEventListener("resize", () => {
      if (window.innerWidth < 370) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    });
  }, []);

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);
  const anchorRef2 = React.useRef<HTMLButtonElement>(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  const handeSendMsg = () => {
    setSend(true);
    setTimeout(() => {
      setModal(false);
      setSidebar(false);
      setTimeout(() => {
        setSend(false);
      }, 100);
    }, 1600);
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
      px={{ xs: "15px", md: "28px" }}
      sx={{
        zIndex: "100",
        position: "fixed",
        py: "10px",
        width: "100%",
        backgroundColor: "white",
      }}
    >
      {/*

       HERE THE SIDEBAR START 
       
       */}
      <Box
        display={{ xs: "block", md: "block" }}
        sx={{
          position: "absolute",
          right: "0px",
          top: "80px",
          width: "100%",
          height: "0px",
        }}
      >
        <Box
          // das hier ist eine
          onClick={() => {
            setSidebar(false);
            setModal(false);
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
        {/* HERE STARTS THE MODAL */}

        <Fade in={modal}>
          <Box
            sx={{
              position: "absolute",
              top: "0px",
              width: "100%",
              px: "30px",
              py: "50px",
            }}
          >
            <Box
              sx={{
                height: "500px",
                backgroundColor: "white",
                maxWidth: "500px",
                mx: "auto",
                padding: "10px",
                position: "relative",
                overflowY: "scroll",
                overflowX: "hidden",
                "& b": {
                  color: "#080844",
                  fontWeight: "400",
                  fontSize: "0.875rem",
                },
              }}
            >
              <Box display={modalIndex === 3 ? "block" : "none"}>
                <Grid
                  container
                  sx={{
                    top: "-10px",
                    py: "10px",
                    paddingRight: "10px",
                    bgcolor: "white",
                    position: "sticky",
                    width: "100%",
                  }}
                >
                  <Grid
                    xs={10}
                    sx={{
                      height: "30px",
                      fontFamily: "Blinker",
                      fontSize: "1.35rem",
                      fontWeight: "500",
                    }}
                    item
                  >
                    {translations.contractModal.headline}
                  </Grid>
                  <Grid
                    xs={2}
                    item
                    pt="4px"
                    sx={{
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      setModal(false);
                      setSidebar(false);
                    }}
                  >
                    <CloseIcon
                      sx={{
                        fontSize: "1.45rem",
                        float: "right",
                      }}
                    />
                  </Grid>
                </Grid>
                <Typography variant="h5">
                  <br />
                  <br />
                  {translations.contractModal.contactPersonSubtitle}
                  <Typography>
                    <br />
                    <b>{translations.contractModal.telephonenumberPoint}</b>
                    <br />
                    {translations.contractModal.telephonenumberText}
                    <br />
                    <br />
                    <b>{translations.contractModal.emailPoint}</b>
                    <br />
                    {translations.contractModal.emailText}
                    <br />
                    <br />
                    <b>{translations.contractModal.personPoint}</b>
                    <br />
                    {translations.contractModal.personText}
                  </Typography>
                  <br />
                  <br />
                  <br />
                  {translations.contractModal.ceoPersonSubtitle}
                  <Typography mb={6}>
                    <br />
                    <b>{translations.contractModal.ceoPoint}</b>
                    <br />
                    {translations.contractModal.ceoText}
                    <br />
                    <br />
                    <b>{translations.contractModal.ceoEmailPoint}</b>
                    <br />
                    {translations.contractModal.ceoEmailText}
                  </Typography>
                </Typography>
                <Stack
                  mt={1}
                  direction="row"
                  spacing={1}
                  justifyContent="end"
                  sx={{
                    position: "relative",
                    bottom: "12px",
                    right: "30px",
                  }}
                >
                  <Button
                    onClick={() => {
                      setModal(false);
                      setSidebar(false);
                    }}
                    variant="outlined"
                  >
                    {translations.contractModal.closeButton}
                  </Button>
                </Stack>
              </Box>

              <Box display={modalIndex === 2 ? "block" : "none"}>
                <Grid
                  container
                  sx={{
                    top: "-10px",
                    py: "10px",
                    paddingRight: "10px",
                    bgcolor: "white",
                    position: "sticky",
                    width: "100%",
                  }}
                >
                  <Grid
                    xs={10}
                    sx={{
                      height: "30px",
                      fontFamily: "Blinker",
                      fontSize: "1.35rem",
                      fontWeight: "500",
                    }}
                    item
                  >
                    {translations.imprintModal.headline}
                  </Grid>
                  <Grid
                    xs={2}
                    item
                    pt="4px"
                    sx={{
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      setModal(false);
                      setSidebar(false);
                    }}
                  >
                    <CloseIcon
                      sx={{
                        fontSize: "1.45rem",
                        float: "right",
                      }}
                    />
                  </Grid>
                </Grid>
                <Typography
                  variant="h5"
                  mb={8}
                  sx={{
                    "& > p": {
                      fontFamily: "Blinker",
                      fontSize: "0.8rem",
                      lineHeight: "18px",
                    },
                  }}
                >
                  <br />
                  {translations.imprintModal.informationByLawSubtitle}
                  <br />
                  <br />
                  <Typography>
                    {translations.imprintModal.fullname}
                    <br />
                    {translations.imprintModal.street}
                    <br />
                    {translations.imprintModal.location}
                    <br />
                    {translations.imprintModal.country}
                    <br />
                    <br />
                  </Typography>
                  {translations.imprintModal.contactSubtitle}
                  <Typography>
                    <br />
                    <br />
                    {translations.imprintModal.telephonenumberPoint}
                    {translations.imprintModal.telephonenumberText}
                    <br />
                    {translations.imprintModal.emailPoint}
                    {translations.imprintModal.emailText}
                    <br />
                    <br />
                    <b>
                      {translations.imprintModal.personIsChargeForTextBolder}
                    </b>
                    <br />
                    {translations.imprintModal.fullname}
                    <br />
                    {translations.imprintModal.street}
                    <br />
                    {translations.imprintModal.location}
                    <br /> {translations.imprintModal.country}
                    <br /> <br />
                    {translations.imprintModal.europeanCommissionText}
                    <br /> <br />
                    <br />
                  </Typography>
                  {translations.imprintModal.disclaimerOfLiabilitySubtitle}
                  <Typography>
                    <br />
                    <b>
                      {translations.imprintModal.liabilityOfContentTextBolder}
                    </b>
                    <br />
                    {translations.imprintModal.liabilityOfContentText}
                    <br />
                    <br />
                    <b>
                      {translations.imprintModal.liabilityOfLinksTextBolder}
                    </b>
                    <br />
                    {translations.imprintModal.liabilityOfLinksText}
                    <br />
                    <br />
                    <b>{translations.imprintModal.copyrightTextBolder}</b>
                    <br />
                    <br />
                    {translations.imprintModal.copyrightText}
                    <br />
                    <br />
                    {translations.imprintModal.sourceText}
                  </Typography>
                </Typography>
                <Stack
                  mt={1}
                  direction="row"
                  spacing={1}
                  justifyContent="end"
                  sx={{
                    position: "relative",
                    bottom: "12px",
                    right: "30px",
                  }}
                >
                  <Button
                    onClick={() => {
                      setModal(false);
                      setSidebar(false);
                    }}
                    variant="outlined"
                  >
                    {translations.imprintModal.closeButton}
                  </Button>
                </Stack>
              </Box>
              {/* position one / modal ordering */}
              <Box
                display={modalIndex === 1 ? "block" : "none"}
                sx={{
                  height: "100%",
                  width: "100%",
                  position: "relative",
                  left: send ? "-110%" : "0%",
                  transition: "left 0.3s ease-in-out",
                }}
              >
                <Grid container>
                  <Grid
                    xs={10}
                    sx={{
                      height: "30px",
                      fontFamily: "Blinker",
                      fontSize: "1.35rem",
                      fontWeight: "500",
                    }}
                    item
                  >
                    {translations.modalHeadline}
                    {/* Bestellungs Anfrage */}
                  </Grid>
                  <Grid
                    xs={2}
                    item
                    pt="4px"
                    sx={{
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      setModal(false);
                      setSidebar(false);
                    }}
                  >
                    <CloseIcon
                      sx={{
                        fontSize: "1.45rem",
                        float: "right",
                      }}
                    />
                  </Grid>
                </Grid>
                <Grid
                  sx={{
                    mt: "6px",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "Blinker",
                      fontSize: "0.8rem",
                      lineHeight: "18px",
                    }}
                  >
                    {translations.modalSubtext}
                    {/* Es freut uns dass du dich für eine Zusammenarbeit mit uns
                    interessiert. */}
                  </Typography>

                  <Stack
                    sx={{
                      position: "relative",
                    }}
                  >
                    <TextField
                      name="email"
                      placeholder={translations.modalInputEmail}
                      sx={{
                        mt: "12px",
                        "& input": {
                          height: "10px",
                        },
                      }}
                    />
                    <TextField
                      name="telephonenumber"
                      placeholder={translations.modalInputTelephonenumber}
                      sx={{
                        mt: "10px",
                        "& input": {
                          height: "10px",
                        },
                      }}
                    />
                    <Box
                      sx={{
                        mt: "10px",
                        "&>*": {
                          width: "100%",
                          height: "90px",
                          borderRadius: "5px",
                          border: "1px solid rgba(0,0,0,0.25)",
                          outline: "none",
                          padding: "12px",
                          fontSize: "0.8rem",
                          fontFamily: "Blinker",
                          resize: "none",
                        },
                        "&>*:hover": {
                          border: "1px solid rgba(0,0,0)",
                        },
                        "&>*:focus": {
                          border: "2px solid rgba(0,0,0)",
                        },
                      }}
                    >
                      <textarea></textarea>
                    </Box>
                    <Typography
                      sx={{
                        mt: "6px",
                        fontFamily: "Blinker",
                        fontSize: "0.8rem",
                        lineHeight: "18px",
                      }}
                    >
                      {translations.modalRadioGroupInfoText}
                      {/* Wann dürfen wir Sie telefonisch erreichen? */}
                    </Typography>
                    <FormControl>
                      <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="female"
                        name="radio-buttons-group"
                        sx={{
                          mb: "80px",
                          px: "20px",
                          "& > label": {
                            mt: "8px",
                          },
                          "&  span.MuiTypography-root": {
                            fontSize: "0.85rem",
                            paddingLeft: "6px",
                          },
                        }}
                      >
                        <FormControlLabel
                          value="female"
                          control={
                            <Radio
                              size="small"
                              sx={{
                                padding: "2px",
                              }}
                            />
                          }
                          label={translations.modalRadioMorningText}
                        />
                        <FormControlLabel
                          value="male"
                          control={
                            <Radio
                              size="small"
                              sx={{
                                padding: "2px",
                              }}
                            />
                          }
                          label={translations.modalRadioMiddayText}
                        />
                        <FormControlLabel
                          value="other"
                          control={
                            <Radio
                              size="small"
                              sx={{
                                padding: "2px",
                              }}
                            />
                          }
                          label={translations.modalRadioEveningText}
                        />
                      </RadioGroup>
                    </FormControl>
                  </Stack>
                </Grid>
                <Stack
                  mt={1}
                  direction="row"
                  spacing={1}
                  justifyContent="end"
                  sx={{
                    right: "10px",
                    position: "absolute",
                    bottom: "12px",
                  }}
                >
                  <Button
                    onClick={() => {
                      setModal(false);
                      setSidebar(false);
                    }}
                    variant="outlined"
                  >
                    {translations.modalButtonCancel}
                    {/* Abbrechen */}
                  </Button>
                  <Button onClick={handeSendMsg} variant="contained">
                    {translations.modalButtonSend}
                    {/* Absenden */}
                  </Button>
                </Stack>
              </Box>
              {/* position two / modal ordering */}
              <Box
                sx={{
                  height: "100%",
                  width: "100%",
                  position: "absolute",
                  left: send ? "0%" : "110%",
                  transition: "left 0.3s ease-in-out",
                  top: "0px",
                  backgroundColor: "white",
                  textAlign: "center",
                  fontFamily: "Blinker",
                }}
              >
                <Box
                  sx={{
                    border: "1px solid #6ab04c",
                    padding: "20px",
                    mt: "80px",
                    height: "60px",
                    width: "60px",
                    mb: "10px",
                    display: "inline-block",
                    position: "relative",
                    borderRadius: "100px",
                  }}
                >
                  <DoneOutlineIcon
                    sx={{
                      fontSize: "2rem",
                      color: "#6ab04c",
                      position: "absolute",
                      top: "14px",
                      left: "14px",
                    }}
                  />
                </Box>
                <Typography
                  sx={{
                    pt: "45x",
                    fontSize: "1.175rem",
                    fontWeight: "600",
                  }}
                >
                  {translations.modalConfirmationHeadline}
                  {/* Alles Erledigt! */}
                </Typography>
                <Typography
                  sx={{
                    mt: "10px",
                    fontSize: "0.875rem",
                    px: "40px",
                  }}
                >
                  {translations.modalConfirmationText}
                  {/* Die Daten wurden erfolgreich gesendet. Wir antworten Ihnen so
                  schnell wie möglich. */}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Fade>
        {/* HERE ENDS THE MODAL */}
        <Stack
          direction="column"
          sx={{
            position: "absolute",
            top: "0px",
            right: sidebar ? (modal ? "-350px" : "0px") : "-350px", // transition here
            width: "auto",
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
            <Typography variant="body1">
              {translations.sidebarCloseText}
            </Typography>
            <CancelOutlinedIcon />
          </Box>

          <Typography
            onClick={() => {
              setSidebar(false);
            }}
            variant="h5"
          >
            {translations.sidebarStart}
          </Typography>
          <Box data-delimeter="true"></Box>
          <Typography
            onClick={() => {
              setSidebar(false);
            }}
            variant="h5"
            sx={{
              "&>a": {
                color: "#080844",
                textDecoration: "none",
              },
            }}
          >
            <a href="tel:+491786985804">{translations.sidebarCalling}</a>
          </Typography>
          <Box data-delimeter="true"></Box>
          <Typography
            onClick={() => {
              setModal(true);
              setModalIndex(1);
            }}
            variant="h5"
          >
            {translations.sidebarOrdering}
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
                  {translations.sidebarChangeLanguage}
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
                <Typography>
                  <Link href="/" locale="it">
                    Italiano
                  </Link>
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
          <Box data-delimeter="true"></Box>
          <Typography
            onClick={() => {
              setModal(true);
              setModalIndex(3);
              setSidebar(true);
            }}
            variant="h5"
          >
            {translations.sidebarContact}
          </Typography>
          <Box data-delimeter="true"></Box>
          <Typography
            onClick={() => {
              setModal(true);
              setModalIndex(2);
              setSidebar(true);
            }}
            variant="h5"
          >
            {translations.navbarImprint}
          </Typography>
        </Stack>
      </Box>
      {/* 
      
      HERE THE SIDEBAR END

      ------------------------------------------------------------------------------------

       
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
        {/*
       HERE START THE IMAGE WRAPPER 
       
       */}
        <Stack
          direction="row"
          alignItems="center"
          sx={{
            position: "relative",
          }}
        >
          <Box
            sx={{
              height: "60px",
              width: "60px",
              position: "relative",
              "&>img": {
                transform: "translateX(-5px)",
              },
            }}
          >
            <Image
              src="/logo-colorful-main.png"
              layout="fill"
              alt=""
              objectFit="contain"
            />
          </Box>
          <Box
            sx={{
              width: "auto",
              "& p": {
                transform: "translateX(-6px) translateY(-2px)",
                pt: "3.5px",
                fontWeight: 500,
                fontSize: "0.925rem",
                fontFamily: "REM",
                lineHeight: "11px",
                color: "#2c3e50",
              },
              "& p:nth-child(1)": { fontWeight: 800 },
            }}
          >
            <Typography>GLOBAL</Typography>
            <Typography>PACIFIC</Typography>
            <Typography>ENERGY</Typography>
          </Box>
        </Stack>

        {/*
       HERE ENDS THE IMAGE WRAPPER 
       
        ----------------------------------------------------------------

        HERE START THE LEFT-SIDED ICON BAR: HAMBURGER ICON, TELEPHONE ICON, WORLD ICON

       */}
        <Stack
          direction="row"
          alignItems="center"
          display={{
            xs: "flex",
            md: "none",
          }}
          sx={{
            ml: "auto",
            position: "relative",
            // vorsicht hier ist ein Selektor die lediglich die container von den icons anspricht.
            '&>div[data-iconwrapper="true"]': {
              mx: "10px",
            },
          }}
        >
          <Box
            data-iconwrapper="true"
            sx={{
              display: mobile ? "none" : "inline-flex",
              "& a": {
                display: "flex",
              },
            }}
          >
            <a href="tel:+491786985804">
              <CallIcon
                sx={{
                  color: "#2c3e50",
                }}
              />
            </a>
          </Box>
          <Box
            data-iconwrapper="true"
            sx={{
              display: mobile ? "none" : "inline-flex",
              background: "none",
            }}
            ref={anchorRef}
            id="composition-button"
            aria-controls={open ? "composition-menu" : undefined}
            aria-expanded={open ? "true" : undefined}
            aria-haspopup="true"
            onClick={handleToggle}
          >
            <LanguageIcon
              sx={{
                color: "#2c3e50",
              }}
            />
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
                        <MenuItem onClick={handleClose}>
                          <Link href="/" locale="it">
                            Italiano
                          </Link>
                        </MenuItem>
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
          </Box>
          <Box
            data-iconwrapper="true"
            sx={{
              display: "flex",
            }}
          >
            <MenuIcon
              sx={{
                fontSize: mobile ? "2rem" : "1.8rem",

                color: "#2c3e50",
              }}
              onClick={() => {
                setSidebar(!sidebar);
                setModal(false);
              }}
            />
          </Box>
        </Stack>

        <Typography
          onClick={() => {
            setModal(true);
            setSidebar(true);
            setModalIndex(3);
          }}
          variant="body1"
          sx={{
            display: {
              xs: "none",
              md: "block",
            },
            cursor: "pointer",
            marginLeft: "25px",
          }}
        >
          {translations.navbarContact}
        </Typography>
        <Typography
          onClick={() => {
            setModal(true);
            setSidebar(true);
            setModalIndex(2);
          }}
          variant="body1"
          sx={{
            display: {
              xs: "none",
              md: "block",
            },
            cursor: "pointer",
            marginLeft: "25px",
          }}
        >
          {translations.navbarImprint}
        </Typography>
        <Typography
          onClick={() => {
            setModal(true);
            setSidebar(true);
            setModalIndex(1);
          }}
          variant="body1"
          sx={{
            display: {
              xs: "none",
              md: "block",
            },
            cursor: "pointer",
            marginLeft: "25px",
          }}
        >
          {/* this is a navbar point when navbar is spreaded */}
          {translations.sidebarOrdering}
        </Typography>
        <Box
          display={{ xs: "none", md: "block" }}
          sx={{
            cursor: "pointer",
            marginLeft: "auto",
            position: "relative",
          }}
        >
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
              {translations.navbarLanguage}
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
                        <MenuItem onClick={handleClose}>
                          <Link href="/" locale="it">
                            Italiano
                          </Link>
                        </MenuItem>
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
          </Box>
        </Box>
        {/* {children.map((elem: any, index: number, arr: any) => {
          return (
          );
        })} */}
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
