import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

interface SelectLanguageProps {
	onSelect: (language: string) => void;
}

export function LanguageSelector({ onSelect }: SelectLanguageProps) {
	return (
		<div className="flex justify-between">
			<Label htmlFor="language">Select Language</Label>
			<Select onValueChange={onSelect}>
				<SelectTrigger className="w-[280px]">
					<SelectValue placeholder="Select a language" />
				</SelectTrigger>
				<SelectContent>
					<SelectGroup>
						<SelectLabel>European Languages</SelectLabel>
						<SelectItem value="en">English</SelectItem>
						<SelectItem value="es">Spanish</SelectItem>
						<SelectItem value="fr">French</SelectItem>
						<SelectItem value="de">German</SelectItem>
						<SelectItem value="it">Italian</SelectItem>
						<SelectItem value="pt">Portuguese</SelectItem>
					</SelectGroup>
					<SelectGroup>
						<SelectLabel>Asian Languages</SelectLabel>
						<SelectItem value="zh">Chinese (Mandarin)</SelectItem>
						<SelectItem value="hi">Hindi</SelectItem>
						<SelectItem value="ja">Japanese</SelectItem>
						<SelectItem value="ko">Korean</SelectItem>
						<SelectItem value="vi">Vietnamese</SelectItem>
						<SelectItem value="th">Thai</SelectItem>
					</SelectGroup>
					<SelectGroup>
						<SelectLabel>Middle Eastern & African Languages</SelectLabel>
						<SelectItem value="ar">Arabic</SelectItem>
						<SelectItem value="sw">Swahili</SelectItem>
						<SelectItem value="am">Amharic</SelectItem>
						<SelectItem value="he">Hebrew</SelectItem>
						<SelectItem value="fa">Persian (Farsi)</SelectItem>
					</SelectGroup>
					<SelectGroup>
						<SelectLabel>Slavic & Baltic Languages</SelectLabel>
						<SelectItem value="ru">Russian</SelectItem>
						<SelectItem value="pl">Polish</SelectItem>
						<SelectItem value="uk">Ukrainian</SelectItem>
						<SelectItem value="cs">Czech</SelectItem>
						<SelectItem value="lt">Lithuanian</SelectItem>
					</SelectGroup>
					<SelectGroup>
						<SelectLabel>Other Languages</SelectLabel>
						<SelectItem value="bn">Bengali</SelectItem>
						<SelectItem value="ta">Tamil</SelectItem>
						<SelectItem value="tr">Turkish</SelectItem>
						<SelectItem value="el">Greek</SelectItem>
					</SelectGroup>
				</SelectContent>
			</Select>
		</div>
	);
}
