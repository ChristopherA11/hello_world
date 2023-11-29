import {render, screen} from '@testing-library/react'
import App from '../../App'


describe("length of list", () => {
    render (<App item={item}/>)
    const listItems = screen.getAllByRole("listItem")
    expect(listItems).toHaveLength(item.length)
})