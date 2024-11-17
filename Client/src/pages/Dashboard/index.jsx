import ContentHeader from "./ContentHeader"
import DonationProcess from "./DonationProcess"
import Navbar from "../Components/Navbar"
import NGOList from "./NGOs"
import Footer from "../Components/Footer"

const Dashboard = () => {
  return (
    <div><Navbar/>
    <ContentHeader/>
    <DonationProcess/>
    <NGOList/>
    <Footer/></div>
  )
}

export default Dashboard