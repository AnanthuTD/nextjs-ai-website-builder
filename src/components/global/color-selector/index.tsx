import { useState } from "react";
import { HexColorPicker } from "react-colorful";
import { type Colors } from "../ai-modal";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";

interface ColorSelectorProps {
	onSelect: (colors: Colors) => void;
}

export function ColorSelector({ onSelect }: ColorSelectorProps) {
	const [color, setColor] = useState<Colors>({
		accent: "",
		background: "",
		neutral: "",
		primary: "",
		secondary: "",
		text: "",
	});
	const [isPicking, setIsPicking] = useState<keyof Colors | "">("");

	const handleColorChange = (newColorValue: string) => {
		if (isPicking) {
			const newColor = { ...color, [isPicking]: newColorValue };
			setColor(newColor);
			onSelect(newColor);
		}
	};

	const colorFields: (keyof Colors)[] = [
		"primary",
		"secondary",
		"accent",
		"background",
		"text",
		"neutral",
	];

	return (
		<>
			<Dialog open={!!isPicking} onOpenChange={() => setIsPicking("")}>
				<DialogContent className="sm:max-w-[425px]">
					<HexColorPicker
						color={isPicking ? color[isPicking] : "#000000"}
						onChange={handleColorChange}
					/>
					<div className="mt-4 text-center">
						<Badge variant="outline">
							Selected: {isPicking ? color[isPicking] || "None" : "None"}
						</Badge>
					</div>
				</DialogContent>
			</Dialog>

			<div className="space-y-2">
				<Label>Select Colors (optional):</Label>
				<div className="grid grid-cols-2 gap-4">
					{colorFields.map((field) => (
						<div key={field} className="flex items-center gap-2">
							<Label className="capitalize w-20">{field}:</Label>
							<div
								className={cn(
									"rounded-full w-6 h-6 cursor-pointer border-2",
									color[field]
										? `bg-[${color[field]}]`
										: "border-dashed border-gray-400 bg-transparent"
								)}
								style={
									color[field] ? { backgroundColor: color[field] } : undefined
								}
								onClick={() => setIsPicking(field)}
							/>
							{color[field] && (
								<span className="text-sm text-gray-600">{color[field]}</span>
							)}
						</div>
					))}
				</div>
			</div>
		</>
	);
}

export default ColorSelector;
