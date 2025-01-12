export function ItemList(props: { children: React.ReactNode }) {
  return <ul className="space-y-4 pl-0">{props.children}</ul>
}

export function ItemListItem(props) {
  return (
    <li className="flex flex-1 items-center space-x-4 pl-0">
      <div className="text-slate-900 dark:text-slate-100 xs:shrink-0">
        {props.left}
      </div>
      <span
        className="w-full border-t border-slate-300 border-dashed dark:border-slate-500 min-w-4"
        style={{ flexShrink: 999999 }}
      ></span>
      <div className="text-slate-600 text-right dark:text-slate-400 tabular-nums xs:shrink-0">
        {props.right}
      </div>
    </li>
  )
}
