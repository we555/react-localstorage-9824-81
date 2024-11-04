function Foo ({prop}) {
	return (
		<div
				style={
					{width: (prop * 6) + 'px', borderTopWidth: 	prop + 'px'}
				}
				className="foos__foo"
			>
			{prop}
		</div>
	)
}

export default Foo
