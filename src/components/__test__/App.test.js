import {render, screen} from '@testing-library/react'
import App from '../../App'
import Counter from '../Counter'

describe("length of list", () => {
    render (<App item={item}/>)
    const listItems = screen.getAllByRole("listItem")
    expect(listItems).toHaveLength(item.length)
})

test("increment button", () => {
    render(<Counter />)

    const btnEle = screen.getByRole()
})