function AvatarPlaceHolder({
	value,
	width = 36,
}: {
	value: string;
	width?: number;
}) {
	return (
		<div
			style={{ width: `${width}px` }}
			className="flex justify-center items-center aspect-square text-sm leading-relaxed text-orange-800 whitespace-nowrap bg-red-200 rounded-full cursor-pointer"
		>
			{value}
		</div>
	);
}

export default AvatarPlaceHolder;
