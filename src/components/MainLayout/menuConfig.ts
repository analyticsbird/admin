import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AccountTreeOutlinedIcon from "@mui/icons-material/AccountTreeOutlined";

type MenuConfig = {
    name: string;
    Icon: any;
    path: string
}
const menuConfig: MenuConfig[] = [
  {
    name: "Home",
    Icon: HomeOutlinedIcon,
    path: "app",
  },
  {
    name: "Feedback",
    Icon: DescriptionOutlinedIcon,
    path: "feedback",
  },
  {
    name: "Customization",
    Icon: SettingsOutlinedIcon,
    path: "customization",
  },
  {
    name: "Integrations",
    Icon: AccountTreeOutlinedIcon,
    path: "integration",
  },
];

export default menuConfig;
