import Image from "next/image";
import styles from "./page.module.css";
import { useTranslations } from "next-intl";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { IMAGES_MANIFEST } from "next/dist/shared/lib/constants";
import Navigationbar from "@/components/Navigationbar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function Main() {
  const t = useTranslations("Index");

  return (
    <Box
      sx={{
        position: "relative",
        height: "100%",
        width: "100vw",
        fontFamily: "Helvetica",
      }}
    >
      {/* NAVIGATIONBAR - - - - - - - - - -- - - - - -- - - - - - -- - - - - - - */}
      <Navigationbar>
        <Typography variant="body1">Kontakt</Typography>
        <Typography variant="body1">Impressum</Typography>
        <Typography variant="body1">Bestellen</Typography>
        <Typography variant="body1">Sprache</Typography>
      </Navigationbar>
      {/* STARTPAGE - - - - - - - - - -- - - - - -- - - - - - -- - - - - - - */}
      <Box
        sx={{
          position: "relative",
          height: "auto",
          width: "100%",
          pt: "250px",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            zIndex: "-1",
            position: "absolute",
            top: "0px",
            height: "100%",
            width: "100%",
            background:
              "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(234,240,222,1) 100%)",
          }}
        ></Box>
        <Box
          sx={{
            px: "20px",
          }}
        >
          <Box
            sx={{
              maxWidth: "868px",
              mx: "auto",
              "&> p": {
                display: "inline-block",
              },
            }}
          >
            <Typography
              sx={{
                color: "#EEC817",
                fontWeight: "500",
                maxWidth: "868px",
                mx: "auto",
                fontSize: "3rem",
              }}
            >
              Harnstoff
            </Typography>
            <Typography
              sx={{
                ml: "14px",
                padding: "2px 7px",
                width: "auto",
                transform: "translateY(-6px)",
                backgroundColor: "#EEC817",
                color: "white",
                fontSize: "1.25rem",
              }}
            >
              46%
            </Typography>
          </Box>

          <Typography
            mb={{ xs: "78px", md: "14px" }}
            sx={{
              color: "#32443F",
              fontWeight: "500",
              maxWidth: "868px",
              mx: "auto",
              fontSize: "1.5rem",
              my: "10px",
            }}
          >
            Düngemittel als Granulat
          </Typography>

          <Box
            sx={{
              maxWidth: "868px",
              mx: "auto",
            }}
          >
            <Box
              width={{ xs: "300px", md: "400px" }}
              height={{ xs: "270px", md: "400px" }}
              sx={{
                position: "relative",
                float: "right",
                shapeOutside:
                  "polygon(473px 78px, 20.43% 77.75%, 30.32% 56.75%, 33.49% 35.5%, 31.75% 15.75%, 26.75% -6%)",
                "& >img": {
                  transform: "translateX(50px) translateY(-76px)",
                },
              }}
            >
              <Image src="/urea.png" alt="" fill objectFit="contain"></Image>
            </Box>
            <Typography
              sx={{
                fontFamily: "Blinker",
                color: "#32443F",
                fontWeight: "500",
                fontSize: "1.1rem",
                textAlign: "justify",
              }}
            >
              Unser Harnstoff ist einer der konzentriertesten Stickstoffdünger
              (46%) und wird normalerweise als Perl- oder Granulatform
              vermarktet. Die erste wird für die Verwendung in der Fertigation
              verwendet, während die zweite direkt auf den Boden aufgetragen
              wird. Sie ist sehr löslich und wird häufig in flüssigen
              Formulierungen eingesetzt. Aufgrund ihrer hohen Löslichkeit ist
              sie beliebt für die Injektion in Tropfbewässerungssysteme. Sie
              wird als Ammoniumquelle klassifiziert und hat daher eine Tendenz,
              den Boden zu versauern.
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            my: "54px",
            height: "10px",
            width: "100%",
            background:
              "linear-gradient(97deg, rgba(255,244,194,1) 0%, rgba(238,200,23,1) 89%)",
          }}
        ></Box>
      </Box>
      {/* SECOND PAGE - - - - - - - - - -- - - - - -- - - - - - -- - - - - - - */}
      <Box
        sx={{
          height: "auto",
          width: "100%",
          mt: "120px",
          "&>div": {
            maxWidth: "746px",
            width: "100%",
            mx: "auto",
          },
        }}
      >
        <Box>
          <Grid
            container
            justifyContent="space-between"
            rowGap={10}
            sx={{
              mb: "125px",
              height: "auto",
              "&>*": {
                minHeight: "200px",
              },
              "& p:nth-child(odd)": {
                backgroundColor: "#EEC817",
              },

              "& h5 > p": {
                color: "white",
                height: "200px",
                display: "inline",
                px: "15px",
                mr: "7px",
                fontSize: "1.1rem",
                fontWeight: "600",
              },
            }}
          >
            <Grid item xs={7}>
              <Typography
                padding={{ xs: "14px 14px 14px 20px", md: "14px" }}
                variant="h5"
              >
                <Typography>Hintergund</Typography>
                Die Verwendung von Urea begann 1935, wurde aber ab den 1960er
                Jahren weit verbreitet. Sie kann als Dünger aus organischer
                Herkunft eingestuft werden, da ihre chemische Struktur einer
                Carbamidverbindung entspricht. Sie wird aus Ammonium und
                Kohlendioxid unter hohem Druck und Temperatur hergestellt.
              </Typography>
            </Grid>
            <Grid item xs={4.75}>
              <Box
                sx={{
                  position: "relative",
                  height: "100%",
                  width: "100%",
                }}
              >
                <Image
                  src="/usingfertilizer-bg.png"
                  alt=""
                  layout="fill"
                  objectFit="cover"
                />
              </Box>
            </Grid>
            <Grid item xs={4.75}>
              <Box
                sx={{
                  position: "relative",
                  height: "100%",
                  width: "100%",
                }}
              >
                <Image
                  src="/growingplant-bg.png"
                  alt=""
                  layout="fill"
                  objectFit="cover"
                />
              </Box>
            </Grid>
            <Grid item xs={7}>
              <Typography
                padding={{ xs: "14px 20px 14px 14px", md: "14px" }}
                variant="h5"
              >
                <Typography>Harnstoff</Typography>
                Wenn der Herstellungsprozess überhitzt wird, kann dies zur
                Bildung von unerwünschtem Biuret führen, das für einige
                Pflanzenarten wie Zitrusfrüchte toxisch sein kann. Eine Urea mit
                mehr als 1% Biuret, die über das Blatt aufgetragen wird, führt
                zu Toxizität. Dieser Effekt ist besonders wichtig, wenn Urea als
                Blattdünger für die Blumenverdünnung bei Trauben verwendet wird.
              </Typography>
            </Grid>

            <Grid item xs={7}>
              <Typography
                padding={{ xs: "14px 14px 14px 20px", md: "14px" }}
                variant="h5"
              >
                <Typography>Harnstoff und der pH-Wert des Bodens</Typography>
                Der optimale pH-Wert für die Aktivität der Urease liegt zwischen
                6,5 und 7,0. Die Hydrolyserate von Harnstoff ist bei einem
                pH-Wert von 6,0 im Vergleich zu pH 4,0 um das Fünffache höher,
                gemessen in CaCl2. In sandigem Boden kann die vollständige
                Hydrolyse von Harnstoff bis zu 30 Tage dauern, im Vergleich zu
                maximal 14 Tagen in tonhaltigeren Böden. Die Hydrolyserate nimmt
                bei höheren Harnstoffdosen und dem pH-Wert des Bodens ab. Der
                AusgangspH-Wert des Bodens beeinflusst die Nitrifikationsrate
                von Harnstoffstickstoff. In einem Boden mit einem pH-Wert von
                6,4, gemessen in CaCl2, wird der gesamte Stickstoff innerhalb
                von 10 Tagen in Nitrat umgewandelt. In saureren Böden mit einem
                pH-Wert von 4,2, gemessen in CaCl2, blieben nach 28 Tagen nach
                der Anwendung 25% der ursprünglichen Stickstoffkonzentration
                erhalten.
              </Typography>
            </Grid>
            <Grid item xs={4.75}>
              <Box
                sx={{
                  position: "relative",
                  height: "100%",
                  width: "100%",
                }}
              >
                <Image
                  src="/handwithfertilizer-bg.png"
                  alt=""
                  layout="fill"
                  objectFit="cover"
                />
              </Box>
            </Grid>
            <Grid item xs={4.75}>
              <Box
                sx={{
                  position: "relative",
                  height: "100%",
                  width: "100%",
                }}
              >
                <Image
                  src="/getreidefield-bg.png"
                  alt=""
                  layout="fill"
                  objectFit="cover"
                />
              </Box>
            </Grid>
            <Grid item xs={7}>
              <Typography
                padding={{ xs: "14px 20px 14px 14px", md: "14px" }}
                variant="h5"
              >
                <Typography>Optimale Temperatur</Typography>
                Es wurde festgestellt, dass die optimale Temperatur für die
                Nitrifikation zwischen 25°C und 35°C liegt. Unter kühlen
                Bedingungen, wie sie in feuchten und schlecht entwässerten Böden
                auftreten können, verläuft die Nitrifikation langsam und es kann
                eine große Ansammlung von Nitriten auftreten. Diese Nitrite
                können in hoher Konzentration toxisch für die Pflanzenwurzeln
                sein. Während der Hidrolysephase von Harnstoff kommt es zunächst
                zu einer Erhöhung des pH-Werts des Bodens (Alkalisierung) und
                anschließend zu einer Acidifizierung. Diese pH-Variationen
                können negative Auswirkungen auf die Nährstoffversorgung von
                Kationen haben.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box
        sx={{
          px: "34px",
          py: "50px",
          height: "auto",
          width: "100%",
          background:
            "linear-gradient(276deg, rgba(255,255,255,1) 0%, rgba(237,242,228,1) 100%)",
          "&> p": {
            mx: "auto",
            fontFamily: "Blinker",
            color: "#32443F",
            fontWeight: "500",
            fontSize: "1.1rem",
            textAlign: "justify",
            maxWidth: "868px",
            py: "5px",
          },
          "& > div:nth-child(1)": {
            color: "#32443F",
            fontWeight: "500",
            fontSize: "1.5rem",
            padding: "0px 0px 25px 0px",
            border: "none",
            maxWidth: "868px",
            mx: "auto",
          },
          "& > div > p": {
            color: "#32443F",
            fontWeight: "500",
            fontSize: "1.5rem",
            display: "inline",
          },
          "& > div": {
            maxWidth: "868px",
            mx: "auto",
            my: "10px",
            width: "100%",
            py: "1px",
            borderBottom: "0.5px solid #DCE4CA",
          },
        }}
      >
        <Box>
          <Typography>Vorteile in der Landwirtschaft</Typography>
          <AutoAwesomeIcon
            sx={{
              transform: "translateX(8px) translateY(4px)",
              color: "#EEC817",
            }}
          />
        </Box>
        <Typography>Geringe Kosten pro Stickstoffeinheit.</Typography>
        <Box></Box>
        <Typography>
          Geringere Frachtkosten aufgrund der hohen Nährstoffkonzentration pro
          Masseneinheit.
        </Typography>
        <Box></Box>
        <Typography>
          Sehr empfehlenswert für die Vorfertilisierung, indem es vor der
          Aussaat in den Boden eingearbeitet wird.
        </Typography>
        <Box></Box>
        <Typography>
          Ein Düngemittel mit saurer Reaktion, empfohlen für neutrale bis leicht
          alkalische Böden.
        </Typography>
        <Box></Box>
        <Typography>
          Erhöht nicht die Salinität des Bewässerungswassers.
        </Typography>
      </Box>
      <Box
        sx={{
          height: "600px",
          width: "100%",
          backgroundColor: "#F9F9F9",
          "&>div": {
            height: "auto",
            width: "100%",
            maxWidth: "746px",
            mx: "auto",
          },
          "& td": {
            color: "#32443F",
            fontFamily: "Blinker",
          },
          "& th": {
            color: "#32443F",
            fontFamily: "Blinker",
            fontWeight: "600",
          },
        }}
      >
        <Box px="20px" mt={8}>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Produkt Spezifikation</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>Qualitätsspezifikationen</TableCell>
                  <TableCell align="right">Weiße Granulate</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Trockenberechneter Stickstoff</TableCell>
                  <TableCell align="right">46,2%</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Biuret, nicht mehr als</TableCell>
                  <TableCell align="right">1,0%</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Wasser, nicht mehr als</TableCell>
                  <TableCell align="right">0,5% Kornverteilung</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Korngröße</TableCell>
                  <TableCell align="right">
                    2mm bis 4mm, mindestens 90%
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Ammomium</TableCell>
                  <TableCell align="right">160 PXT PPM MAX.</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Schmelzpunk</TableCell>
                  <TableCell align="right">132 Grad</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Kornbruch</TableCell>
                  <TableCell align="right">100%</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
      <Box
        sx={{
          height: "10px",
          width: "100%",
          position: "relative",
          background:
            "linear-gradient(97deg, rgba(255,255,255,1) 0%, rgba(237,242,228,1) 100%)",
        }}
      ></Box>
      <Box
        sx={{
          height: "auto",
          width: "100%",
          position: "relative",
          backgroundColor: "#f1f5e980",
          pb: "20px",
          "& > div": {
            maxWidth: "868px",
            mx: "auto",
            width: "100%",
          },
        }}
      >
        <Box>
          <Grid
            pt={12}
            pb={8}
            container
            justifyContent={{ xs: "center", md: "space-between" }}
            sx={{
              "&>div": {
                height: "auto",
              },
            }}
          >
            <Grid item xs={11} md={7}>
              <Box
                sx={{
                  mb: "20px",
                  border: "1px solid #FFEFA1",
                  borderTop: "44px solid #FFEFA1",
                  px: "16px",
                  "& > h5:nth-child(1)": {
                    transform: "translateY(-34px)",
                    color: "#32443F;",

                    pt: "0px",
                  },
                  "& > h5": {
                    transform: "translateY(-12px)",
                    fontFamily: "Blinker",
                    color: "#32443F",
                    fontWeight: "500",
                    fontSize: "1.1rem",
                    py: "12px",
                  },
                  "& > h5:nth-child(2)": {
                    py: "0px",
                  },
                  "& p": {
                    fontFamily: "Blinker",
                    color: "#32443F",
                    fontWeight: "500",
                    fontSize: "0.975rem",
                    opacity: "0.75",
                  },
                }}
              >
                <Typography variant="h5">Produktangebot</Typography>
                <Typography variant="h5">
                  <Typography>Material: </Typography>Urea 46%, Granulat
                </Typography>
                <Typography variant="h5">
                  <Typography>Herkunft: </Typography>USA und andere autorisierte
                  Länder
                </Typography>
                <Typography variant="h5">
                  <Typography>Qualität: </Typography>SGS-Zertifiziert
                </Typography>
                <Typography variant="h5">
                  <Typography>Vertrag: </Typography>1 Jahr
                </Typography>
                <Typography variant="h5">
                  <Typography>Lieferungen: </Typography>Monatlich
                </Typography>
                <Typography variant="h5">
                  <Typography>Verpackung: </Typography>In Bulk zu je 50
                  Kilogramm oder in loser Form
                </Typography>
                <Typography variant="h5">
                  <Typography>Preis: </Typography>Wird zu einem späteren
                  Zeitpunkt bestimmt (TBDA)
                </Typography>
                <Typography variant="h5">
                  <Typography>Incooterms: </Typography>CIF
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={11} md={4.8}>
              <Box
                sx={{
                  mb: "20px",
                  border: "1px solid #FFEFA1",
                  borderTop: "44px solid #FFEFA1",
                  px: "16px",
                  "& > h5:nth-child(1)": {
                    transform: "translateY(-34px)",
                    color: "#32443F;",
                    pt: "0px",
                  },
                  "& > h5": {
                    transform: "translateY(-12px)",
                    fontFamily: "Blinker",
                    color: "#32443F",
                    fontWeight: "500",
                    fontSize: "1.1rem",
                  },
                  "& > h5:nth-child(2)": {
                    py: "12px",
                  },
                  "& p": {
                    fontFamily: "Blinker",
                    color: "#32443F",
                    fontWeight: "500",
                    fontSize: "0.975rem",
                    opacity: "0.75",
                  },
                }}
              >
                <Typography variant="h5">Kundenservice</Typography>
                <Typography variant="h5">
                  <Typography>Telefonnummer: </Typography>01786985804
                </Typography>
                <Typography variant="h5">
                  <Typography>Email-Adresse:</Typography>
                  raphaelquintoehnold@gmail.com
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box
        sx={{
          height: "auto",
          width: "100vw",
          py: "25px",
          backgroundColor: "white",
          px: "28px",

          "&>*": {
            maxWidth: "868px",
            mx: "auto",
            lineHeight: "20px",
          },
        }}
      >
        <Typography variant="body1" fontSize={{ xs: "0.875rem", md: "1rem" }}>
          Alle Rechte sind der Global Pacific Energy LCC vorbehalten / 27. July
          2023
        </Typography>
      </Box>
    </Box>
  );
}
