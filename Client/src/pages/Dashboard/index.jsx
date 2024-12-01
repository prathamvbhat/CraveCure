import DonationList from "../DonationList"
import ContentHeader from "./ContentHeader"
import DonationProcess from "./DonationProcess"
import NGOList from "./NGOs"

const Dashboard = () => {
  return (
    <div>
    <ContentHeader/>
    <DonationProcess/>
    <NGOList/>
    <DonationList/>
    </div>
  )
}

export default Dashboard