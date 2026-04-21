function FilterButtons({
  label,
  options,
  currentValue,
  createHref,
  filterKey,
  onSelect,
}) {
  return (
    <div className="filter-group">
      <span className="filter-group__label">{label}</span>
      <div className="filter-group__options">
        {options.map((option) => {
          const isActive = option.value === currentValue

          return (
            <a
              key={option.value}
              href={createHref(filterKey, option.value)}
              className={`filter-chip ${isActive ? 'filter-chip--active' : ''}`.trim()}
              onClick={() => onSelect(option)}
            >
              {option.label}
            </a>
          )
        })}
      </div>
    </div>
  )
}

export default FilterButtons
