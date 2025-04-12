import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

interface Props {
	onSelect: (value: string) => void;
}

export function TemplateSelector({ onSelect }: Props) {
	return (
		<ToggleGroup
			type="single"
			className="gap-2 flex flex-wrap justify-center"
			onValueChange={(value) => {
				if (value) {
					onSelect(value);
				}
			}}
		>
			<ToggleGroupItem
				value="Health & Fitness"
				aria-label="Health & Fitness"
				className="px-4 py-2 rounded-md text-sm font-medium transition-colors data-[state=on]:bg-indigo-500 data-[state=on]:text-white data-[state=off]:bg-gray-100 data-[state=off]:text-gray-700 data-[state=off]:hover:bg-gray-200"
			>
				Health & Fitness
			</ToggleGroupItem>
			<ToggleGroupItem
				value="Course Selling"
				aria-label="Course Selling"
				className="px-4 py-2 rounded-md text-sm font-medium transition-colors data-[state=on]:bg-indigo-500 data-[state=on]:text-white data-[state=off]:bg-gray-100 data-[state=off]:text-gray-700 data-[state=off]:hover:bg-gray-200"
			>
				Course Selling
			</ToggleGroupItem>
			<ToggleGroupItem
				value="E-commerce"
				aria-label="E-commerce"
				className="px-4 py-2 rounded-md text-sm font-medium transition-colors data-[state=on]:bg-indigo-500 data-[state=on]:text-white data-[state=off]:bg-gray-100 data-[state=off]:text-gray-700 data-[state=off]:hover:bg-gray-200"
			>
				E-commerce
			</ToggleGroupItem>
			<ToggleGroupItem
				value="Portfolio"
				aria-label="Portfolio"
				className="px-4 py-2 rounded-md text-sm font-medium transition-colors data-[state=on]:bg-indigo-500 data-[state=on]:text-white data-[state=off]:bg-gray-100 data-[state=off]:text-gray-700 data-[state=off]:hover:bg-gray-200"
			>
				Portfolio
			</ToggleGroupItem>
			<ToggleGroupItem
				value="Blog"
				aria-label="Blog"
				className="px-4 py-2 rounded-md text-sm font-medium transition-colors data-[state=on]:bg-indigo-500 data-[state=on]:text-white data-[state=off]:bg-gray-100 data-[state=off]:text-gray-700 data-[state=off]:hover:bg-gray-200"
			>
				Blog
			</ToggleGroupItem>
		</ToggleGroup>
	);
}
