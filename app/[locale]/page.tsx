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
import OpenLightboxButton from "@/components/OpenLightboxButton";

export default function Main() {
  const t = useTranslations("page");

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
      <Navigationbar
        translations={{
          modalHeadline: t("modal.modalHeadline"),
          modalSubtext: t("modal.modalSubtext"),
          modalInputEmail: t("modal.modalInputEmail"),
          modalInputTelephonenumber: t("modal.modalInputTelephonenumber"),
          modalRadioGroupInfoText: t("modal.modalRadioGroupInfoText"),
          modalRadioMorningText: t("modal.modalRadioMorningText"),
          modalRadioMiddayText: t("modal.modalRadioMiddayText"),
          modalRadioEveningText: t("modal.modalRadioEveningText"),
          modalButtonCancel: t("modal.modalButtonCancel"),
          modalButtonSend: t("modal.modalButtonSend"),
          modalConfirmationHeadline: t("modal.modalConfirmationHeadline"),
          modalConfirmationText: t("modal.modalConfirmationText"),
          sidebarStart: t("sidebarStart"),
          sidebarCalling: t("sidebarCalling"),
          sidebarOrdering: t("sidebarOrdering"),
          sidebarChangeLanguage: t("sidebarChangeLanguage"),
          sidebarContact: t("sidebarContact"),
          sidebarCloseText: t("sidebarCloseText"),
          navbarLanguage: t("navbarLanguage"),
          navbarContact: t("sidebarContact"),
          navbarImprint: t("navbarImprint"),
          navbarOrdering: t("sidebarOrdering"),
          contractModal: {
            headline: t("contactModal.modalHeadline"),
            contactPersonSubtitle: t("contactModal.modalContactPersonSubtitle"),
            telephonenumberPoint: t("contactModal.modalTelephonenumberPoint"),
            telephonenumberText: t("contactModal.modalTelephonenumberText"),
            emailPoint: t("contactModal.modalEmailPoint"),
            emailText: t("contactModal.modalEmailText"),
            personPoint: t("contactModal.modalPersonPoint"),
            personText: t("contactModal.modalPersonText"),
            ceoPersonSubtitle: t("contactModal.modalCeoPersonSubtitle"),
            ceoPoint: t("contactModal.modalCeoPoint"),
            ceoText: t("contactModal.modalCeoText"),
            ceoEmailPoint: t("contactModal.modalCeoEmailPoint"),
            ceoEmailText: t("contactModal.modalCeoEmailText"),
            closeButton: t("contactModal.modalCloseButton"),
          },
          imprintModal: {
            headline: t("imprintModal.modalHeadline"),

            informationByLawSubtitle: t(
              "imprintModal.modalInformationByLawSubtitle"
            ),
            fullname: t("imprintModal.modalFullname"),
            street: t("imprintModal.modalStreet"),
            location: t("imprintModal.modaLocation"),
            country: t("imprintModal.modalCountry"),

            contactSubtitle: t("imprintModal.modalContactSubtitle"),
            telephonenumberPoint: t("imprintModal.modalTelephonePoint"),
            telephonenumberText: t("imprintModal.modalTelephoneText"),
            emailPoint: t("imprintModal.modalEmailPoint"),
            emailText: t("imprintModal.modalEmailText"),

            personIsChargeForTextBolder: t(
              "imprintModal.modalPersonIsChargeForTextBolder"
            ),
            europeanCommissionText: t(
              "imprintModal.modalEuropeanCommissionText"
            ),

            //
            //
            //
            disclaimerOfLiabilitySubtitle: t(
              "imprintModal.modalDisclaimerOfLiabilitySubtitle"
            ),

            liabilityOfContentTextBolder: t(
              "imprintModal.modalLiabilityOfContentTextBolder"
            ),
            liabilityOfContentText: t(
              "imprintModal.modalLiabilityOfContentText"
            ),

            liabilityOfLinksTextBolder: t(
              "imprintModal.modalLiabilityOfLinksTextBolder"
            ),
            liabilityOfLinksText: t("imprintModal.modalLiabilityOfLinksText"),
            copyrightTextBolder: t("imprintModal.modalCopyrightTextBolder"),
            copyrightText: t("imprintModal.modalCopyrightText"),
            sourceText: t("imprintModal.modalSourceText"),

            closeButton: t("imprintModal.modalCloseButton"),
          },
        }}
      />
      {/* STARTPAGE - - - - - - - - - -- - - - - -- - - - - - -- - - - - - - */}

      <Box
        pt={{ md: "210px", sm: "100px" }}
        sx={{
          position: "relative",
          height: "auto",
          width: "100%",
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
            }}
          >
            <Box display={{ xs: "block", sm: "none" }}>
              <Typography
                sx={{
                  color: "#32443F",
                  fontWeight: "500",
                  maxWidth: "868px",
                  mx: "auto",
                  paddingTop: "150px",
                  fontSize: "1.5rem",
                  borderBottom: "1px solid rgba(0, 0, 0, 0.075)",
                  paddingBottom: "10px",
                }}
              >
                {t("ureaPageSubtitle")}
              </Typography>
            </Box>
            <Typography
              fontSize={{ sm: "3rem", xs: "2rem" }}
              mt={{ sm: "100px", xs: "0px" }}
              sx={{
                color: "#EEC817",
                fontWeight: "500",
                display: "inline-block",
                maxWidth: "868px",
                mx: "auto",
              }}
            >
              {t("ureaPageHeadline")}
            </Typography>
            <Box display={{ sm: "inline-flex", xs: "none" }}>
              <Typography
                fontSize={{ sm: "1.25rem" }}
                sx={{
                  ml: "14px",
                  color: "white",
                  width: "auto",
                  padding: "2px 7px",
                  transform: "translateY(-6px)",
                  backgroundColor: "#EEC817",
                }}
              >
                46%
              </Typography>
            </Box>
            <Box display={{ xs: "inline-block", sm: "none" }}>
              <Typography
                sx={{
                  fontWeight: "600",
                  paddingLeft: "10px",
                  color: "#EEC817",
                  fontSize: "2rem",
                }}
              >
                46%
              </Typography>
            </Box>
            <Box display={{ xs: "inline", sm: "none" }}>
              <Typography
                sx={{
                  display: "inline",
                  paddingLeft: "15px",
                  fontFamily: "Blinker",
                  color: "#32443F",
                  fontWeight: "500",
                  fontSize: "1.1rem",
                  textAlign: "justify",
                }}
              >
                {t("ureaIntroductionText")}
              </Typography>
            </Box>
          </Box>
          {/* HIER DRAUF ACHTEN DAS DIE TRANSLATION AUCH IN DIE ATTRIBUTE KOMMEN YALLAH */}
          <OpenLightboxButton
            einklappen={t("buttonCollapseDownImageText")}
            ausklappen={t("buttonCollapseUpImageText")}
          />

          <Box display={{ xs: "none", sm: "inline" }}>
            <Typography
              mb={{ xs: "28px", md: "14px" }}
              mt={{ xs: "0px", sm: "10px" }}
              sx={{
                color: "#32443F",
                fontWeight: "500",
                maxWidth: "868px",
                mx: "auto",
                fontSize: "1.5rem",
              }}
            >
              {t("ureaPageSubtitle")}
            </Typography>
          </Box>

          <Box
            display={{ xs: "none", sm: "block" }}
            sx={{
              maxWidth: "868px",
              mx: "auto",
            }}
          >
            <Box
              width={{ xs: "300px", md: "360px" }}
              height={{ xs: "270px", md: "360px" }}
              display={{ xs: "none", sm: "block" }}
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
              <Image
                src="/urea-main.png"
                alt=""
                fill
                objectFit="contain"
              ></Image>
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
              {t("ureaIntroductionText")}
            </Typography>
          </Box>
        </Box>

        <Box
          display={{ xs: "none", sm: "block" }}
          sx={{
            my: "54px",
            height: "10px",
            width: "100%",
            background:
              "linear-gradient(97deg, rgba(255,244,194,1) 0%, rgba(238,200,23,1) 89%)",
          }}
        ></Box>
      </Box>
      {/* 

      SECOND PAGE / Informaiton zum Granulat - - - - - - - - - -- - - - - -- - - - - - -- - - - - - - 

      */}
      <Box
        display={{ xs: "none", sm: "block" }}
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
                <Typography>{t("ureaContextHeadline")}</Typography>
                {t("ureaContextText")}
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
                <Typography>{t("ureaGranulesHeadline")}</Typography>
                {t("ureaGranulesText")}
              </Typography>
            </Grid>

            <Grid item xs={7}>
              <Typography
                padding={{ xs: "14px 14px 14px 20px", md: "14px" }}
                variant="h5"
              >
                <Typography>{t("ureaSoilPHHeadline")}</Typography>
                {t("ureaSoilPHText")}
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
                <Typography>{t("ureaOptimalTemperatureHeadline")}</Typography>
                {t("ureaOptimalTemperatureText")}
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>

      {/* THIS CODE BELOW DESCRIBES THE MOBILE VERSION */}

      <Box
        display={{ xs: "block", sm: "none" }}
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
            rowGap={7}
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
            <Grid item xs={12}>
              <Typography
                padding={{ xs: "14px 14px 14px 20px", md: "14px" }}
                variant="h5"
              >
                <Typography>{t("ureaContextHeadline")}</Typography>
                {t("ureaContextText")}
              </Typography>
            </Grid>
            <Grid item xs={12}>
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

            <Grid item xs={12}>
              <Typography
                padding={{ xs: "14px 20px 14px 14px", md: "14px" }}
                variant="h5"
              >
                <Typography>{t("ureaGranulesHeadline")}</Typography>
                {t("ureaGranulesText")}
              </Typography>
            </Grid>
            <Grid item xs={6}>
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
            <Grid item xs={6}>
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
            <Grid item xs={12}>
              <Typography
                padding={{ xs: "14px 14px 14px 20px", md: "14px" }}
                variant="h5"
              >
                <Typography>{t("ureaSoilPHHeadline")}</Typography>
                {t("ureaSoilPHText")}
              </Typography>
            </Grid>

            <Grid item xs={12}>
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
            <Grid item xs={12}>
              <Typography
                padding={{ xs: "14px 20px 14px 14px", md: "14px" }}
                variant="h5"
              >
                <Typography>{t("ureaOptimalTemperatureHeadline")}</Typography>
                {t("ureaOptimalTemperatureText")}
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
      {/* 
      
      SECOND PAGE / Informaiton zum Granulat - - - - - - - - - -- - - - - -- - - - - - -- - - - - - - 
      
      */}

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
          <Typography>
            {t("ureaAdvantagesAgricultureTable.tableHeadline")}
          </Typography>
          <AutoAwesomeIcon
            sx={{
              transform: "translateX(8px) translateY(4px)",
              color: "#EEC817",
            }}
          />
        </Box>
        <Typography>
          {t("ureaAdvantagesAgricultureTable.tableRowLowUnitCostText")}
        </Typography>
        <Box></Box>
        <Typography>
          {t("ureaAdvantagesAgricultureTable.tableRowLowFreightCoseText")}
        </Typography>
        <Box></Box>
        <Typography>
          {t("ureaAdvantagesAgricultureTable.tableRowFertilizationBeginnText")}
        </Typography>
        <Box></Box>
        <Typography>
          {t("ureaAdvantagesAgricultureTable.tableRowSourFertilizationText")}
        </Typography>
        <Box></Box>
        <Typography>
          {t("ureaAdvantagesAgricultureTable.tableRowStaticSalnityText")}
        </Typography>
      </Box>
      <Box
        sx={{
          my: 7,
          height: "auto",
          width: "100%",
          backgroundColor: "#F9F9F9",
          "&>div": {
            height: "auto",
            width: "100%",
            maxWidth: "746px",
            mx: "auto",
          },
        }}
      >
        <Box px="20px">
          <Grid
            xs={12}
            sx={{
              height: "auto",
              width: "100%",
              border: "1.6px solid rgba(0,0,0,0.03)",
              "&>div": {
                height: "auto",
                fontFamily: "Blinker",
                fontSize: "1.125rem",
                overflow: "hidden",
                whiteSpace: "wrap",
              },
              "&>div>div:nth-child(2)": {
                textAlign: "right",
              },
              "&>div>div": {
                padding: "18px 8px",
                height: "auto",
                fontFamily: "Blinker",
                fontSize: "1rem",
                overflow: "hidden",
              },
              "&>div:nth-child(odd)": { backgroundColor: "rgba(0,0,0,0.03)" },
              "&>div:nth-child(1)": {
                color: "#32443F",
                fontWeight: "600",
              },
            }}
          >
            <Grid item xs={12} p="8px">
              {t("productSpecificationTable.tableHeadline")}
            </Grid>

            <Grid container>
              <Grid item xs={6}>
                {t(
                  "productSpecificationTable.tableRowQualitySpecificationPoint"
                )}
              </Grid>
              <Grid item xs={6}>
                {t(
                  "productSpecificationTable.tableRowQualitySpecificationText"
                )}
              </Grid>
            </Grid>

            <Grid container>
              <Grid item xs={6}>
                {t("productSpecificationTable.tableRowDryNitrogenPoint")}
              </Grid>
              <Grid item xs={6}>
                {t("productSpecificationTable.tableRowDryNitrogenText")}
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={6}>
                {t("productSpecificationTable.tableRowBiuretPoint")}
              </Grid>
              <Grid item xs={6}>
                {t("productSpecificationTable.tableRowBiuretText")}
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={6}>
                {t("productSpecificationTable.tableRowWaterPoint")}
              </Grid>
              <Grid item xs={6}>
                {t("productSpecificationTable.tableRowWaterText")}
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={6}>
                {t("productSpecificationTable.tableCornSizePoint")}
              </Grid>
              <Grid item xs={6}>
                {t("productSpecificationTable.tableCornSizeText")}
              </Grid>
            </Grid>

            <Grid container>
              <Grid item xs={6}>
                {t("productSpecificationTable.tableAmmoniumPoint")}
              </Grid>
              <Grid item xs={6}>
                {t("productSpecificationTable.tableAmmoniumText")}
              </Grid>
            </Grid>

            <Grid container>
              <Grid item xs={6}>
                {t("productSpecificationTable.tableMeltpointPoint")}
              </Grid>
              <Grid item xs={6}>
                {t("productSpecificationTable.tableMeltpointText")}
              </Grid>
            </Grid>

            <Grid container>
              <Grid item xs={6}>
                {t("productSpecificationTable.tableBrokenGrainkPoint")}
              </Grid>
              <Grid item xs={6}>
                {t("productSpecificationTable.tableBrokenGrainkText")}
              </Grid>
            </Grid>
          </Grid>
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
                <Typography variant="h5">
                  {t("productOfferingTable.tableHeadline")}
                </Typography>
                <Typography variant="h5">
                  <Typography>
                    {t("productOfferingTable.tableRowMaterialPoint")}
                  </Typography>
                  {t("productOfferingTable.tableRowMaterialText")}
                </Typography>
                <Typography variant="h5">
                  <Typography>
                    {t("productOfferingTable.tableRowOriginPoint")}
                  </Typography>
                  {t("productOfferingTable.tableRowOriginText")}
                </Typography>
                <Typography variant="h5">
                  <Typography>
                    {t("productOfferingTable.tableRowQualityPoint")}
                  </Typography>
                  {t("productOfferingTable.tableRowQualityText")}
                </Typography>
                <Typography variant="h5">
                  <Typography>
                    {t("productOfferingTable.tableRowContractPoint")}
                  </Typography>
                  {t("productOfferingTable.tableRowContractText")}
                </Typography>
                <Typography variant="h5">
                  <Typography>
                    {t("productOfferingTable.tableRowDeliveryPoint")}
                  </Typography>
                  {t("productOfferingTable.tableRowDeliveryText")}
                </Typography>
                <Typography variant="h5">
                  <Typography>
                    {t("productOfferingTable.tableRowPackagingPoint")}
                  </Typography>
                  {t("productOfferingTable.tableRowPackagingText")}
                </Typography>
                <Typography variant="h5">
                  <Typography>
                    {t("productOfferingTable.tableRowPricePoint")}
                  </Typography>
                  {t("productOfferingTable.tableRowPriceText")}
                </Typography>
                <Typography variant="h5">
                  <Typography>
                    {t("productOfferingTable.tableRowIncoTermsPoint")}
                  </Typography>
                  {t("productOfferingTable.tableRowIncoTermsText")}
                </Typography>
              </Box>
            </Grid>
            <Grid direction="column" xs={11} md={4.8}>
              <Grid item xs={11} md={12}>
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
                    "& p": {
                      fontFamily: "Blinker",
                      color: "#32443F",
                      fontWeight: "500",
                      fontSize: "0.975rem",
                      opacity: "0.75",
                    },
                  }}
                >
                  <Typography variant="h5">
                    {t("customerSupportTable.tableHeadline")}
                  </Typography>
                  <Typography variant="h5">
                    <Typography>
                      {t("customerSupportTable.tableRowTelephonenumberPoint")}
                    </Typography>
                    {t("customerSupportTable.tableRowTelephonenumberText")}
                  </Typography>
                  <Typography variant="h5">
                    <Typography>
                      {t("customerSupportTable.tableRowEmailaddressPoint")}
                    </Typography>
                    {t("customerSupportTable.tableRowEmailaddressText")}
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={11} md={12}>
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
                    "& p": {
                      fontFamily: "Blinker",
                      color: "#32443F",
                      fontWeight: "500",
                      fontSize: "0.975rem",
                      opacity: "0.75",
                    },
                  }}
                >
                  <Typography variant="h5">
                    {t("managementTable.tableHeadline")}
                  </Typography>
                  <Typography variant="h5">
                    <Typography>CEO</Typography>
                    {t("managementTable.tableRowCeoText")}
                  </Typography>
                  <Typography variant="h5">
                    <Typography>
                      {t("managementTable.tableRowCeoEmailaddressPoint")}
                    </Typography>
                    {t("managementTable.tableRowCeoEmailaddressText")}
                  </Typography>
                  <Typography variant="h5">
                    <Typography>
                      {t("managementTable.tableRowCollectionUsPoint")}
                    </Typography>
                    {t("managementTable.tableRowCollectionUsText")}
                  </Typography>
                  <Typography variant="h5">
                    <Typography>
                      {t("managementTable.tableRowCollectionEuPoint")}
                    </Typography>
                    {t("managementTable.tableRowCollectionEuText")}
                  </Typography>
                </Box>
              </Grid>
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
