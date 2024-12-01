import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from "../../components/ui/drawer"
import { Button } from "../../components/ui/button"
import DonationItem from "./DonationItem"

const DonationList = () => {
  return (
    <Drawer>
  <DrawerTrigger className="p-4 text-2xl w-full rounded-md bg-slate-500">Click Here to See The Cureent Donation List</DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Donation Item list</DrawerTitle>
      <DrawerDescription><DonationItem/></DrawerDescription>
    </DrawerHeader>
    <DrawerFooter>
      <DrawerClose>
        <Button variant="outline">Cancel</Button>
      </DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer>
  )
}

export default DonationList