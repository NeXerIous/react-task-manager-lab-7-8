import { fireEvent, render, screen } from '@testing-library/react'
import FilterButtons from '../components/ui/FilterButtons'
import { statusOptions } from '../data/mockData'

describe('FilterButtons', () => {
  test('renders links, highlights the active filter and builds href values', () => {
    render(
      <FilterButtons
        label="Status"
        options={statusOptions}
        currentValue="done"
        createHref={(key, value) => `?${key}=${value}`}
        filterKey="status"
        onSelect={() => {}}
      />,
    )

    const doneLink = screen.getByRole('link', { name: 'Done' })
    const allStatusesLink = screen.getByRole('link', { name: 'All statuses' })

    expect(doneLink).toHaveAttribute('href', '?status=done')
    expect(doneLink).toHaveClass('filter-chip--active')
    expect(allStatusesLink).not.toHaveClass('filter-chip--active')
  })

  test('calls onSelect with the clicked option', () => {
    const onSelect = jest.fn()

    render(
      <FilterButtons
        label="Status"
        options={statusOptions}
        currentValue="all"
        createHref={(key, value) => `?${key}=${value}`}
        filterKey="status"
        onSelect={onSelect}
      />,
    )

    fireEvent.click(screen.getByRole('link', { name: 'In progress' }))

    expect(onSelect).toHaveBeenCalledWith({
      label: 'In progress',
      value: 'in-progress',
    })
  })
})
