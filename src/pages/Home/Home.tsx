import Header from "../../components/layout/Header";
import Sidebar from "../../components/layout/Sidebar";
import Footer from "../../components/layout/Footer";
import CardTemplate from "../../components/cards/common/CardTemplate";
import FinanceCardContent from "../../components/cards/content/FinanceCardContent";
import GarbageCardContent from "../../components/cards/content/GarbageCardContent.";
import NoticeCardContent from "../../components/cards/content/NoticeCardContent.";
import SalesCardContent from "../../components/cards/content/SalesCardContent.";
import ShoppingCardContent from "../../components/cards/content/ShoppingCardContent.";
import WeatherCardContent from "../../components/cards/content/WeatherCardContent.";
import sidemenus from "../../data/sidemenu.json";
import { Grid } from "@mui/material";

export default function Home() {
  return (
    <>
      <Header></Header>
      <div className="content-container">
        <Sidebar></Sidebar>
        <Grid
          container
          spacing={2}
          sx={{
            flexGrow: 1,
            minWidth: 0,
          }}
        >
          {sidemenus.filter((item) => item.isCard)
                    .map((item) => {
            switch (item.path) {
              case "/finance":
                return (
                  <Grid size={item.gridSize.md}>
                    <CardTemplate
                      icon={item.icon}
                      title={item.label}
                      path={item.path}
                      messageAll={item.messageAll}
                      CardContent={<FinanceCardContent />}
                      maxWidth={item.maxWidth}
                    />
                  </Grid>
                );
              case "/garbage":
                return (
                  <Grid size={item.gridSize.md}>
                    <CardTemplate
                      icon={item.icon}
                      title={item.label}
                      path={item.path}
                      messageAll={item.messageAll}
                      CardContent={<GarbageCardContent />}
                      maxWidth={item.maxWidth}
                    />
                  </Grid>
                );
              case "/notice":
                return (
                  <Grid size={item.gridSize.md}>
                    <CardTemplate
                      icon={item.icon}
                      title={item.label}
                      path={item.path}
                      messageAll={item.messageAll}
                      CardContent={<NoticeCardContent />}
                      maxWidth={item.maxWidth}
                    />
                  </Grid>
                );
              case "/sales":
                return (
                  <Grid size={item.gridSize.md}>
                    <CardTemplate
                      icon={item.icon}
                      title={item.label}
                      path={item.path}
                      messageAll={item.messageAll}
                      CardContent={<SalesCardContent />}
                      maxWidth={item.maxWidth}
                    />
                  </Grid>
                );
              case "/shopping":
                return (
                  <Grid size={item.gridSize.md}>
                    <CardTemplate
                      icon={item.icon}
                      title={item.label}
                      path={item.path}
                      messageAll={item.messageAll}
                      CardContent={<ShoppingCardContent />}
                      maxWidth={item.maxWidth}
                    />
                  </Grid>
                );
              case "/weather":
                return (
                  <Grid size={item.gridSize.md}>
                    <CardTemplate
                      icon={item.icon}
                      title={item.label}
                      path={item.path}
                      messageAll={item.messageAll}
                      CardContent={<WeatherCardContent />}
                      maxWidth={item.maxWidth}
                    />
                  </Grid>
                );
              default:
                return(
                <Grid size={item.gridSize.md}>
                  <CardTemplate
                    icon={item.icon}
                    title={item.label}
                    path={item.path}
                    messageAll={item.messageAll}
                    CardContent={<div> Coming Soon </div>}
                    maxWidth={item.maxWidth}
                  />
                </Grid>
                );
            }
          })}
        </Grid>
      </div>
      <Footer></Footer>
    </>
  );
}
