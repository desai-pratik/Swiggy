import { render, screen } from "@testing-library/react"
import { RestrorentCard } from "../RestrorentCard"
import MOCK_DATA from "../mocks/resDataMock.json"
import "@testing-library/jest-dom"

it("should should render the restrorentCart with data",()=>{
    render(<RestrorentCard resData={MOCK_DATA} />)
   const name =  screen.getByText("Dilliwale Pahelvanjee'S Cholle Bhature")
   expect(name).toBeInTheDocument()
})