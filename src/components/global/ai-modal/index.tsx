import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";
import { PlusSquareIcon } from "lucide-react";
import { TemplateSelector } from "../template-selector";
import { useRef, useState } from "react";
import { AiPromptInputArea } from "../prompt-text-box";
import { LanguageSelector } from "../language-selector";
import ColorSelector from "../color-selector";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export interface Colors {
  primary: string;
  secondary: string;
  background: string;
  text: string;
  neutral: string;
  accent: string;
}

interface AiModalProps {
  onSubmit: (data: {
    prompt: string;
    language: string;
    template: string;
    colors: Colors;
    projectName: string;
  }) => void;
}

const AiModal = ({ onSubmit }: AiModalProps) => {
  const [selectedTemplate, setSelectedTemplate] = useState("");
  const [userPrompt, setUserPrompt] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [open, setOpen] = useState(false);
  const [colors, setColors] = useState<Colors>({
    accent: "",
    background: "",
    neutral: "",
    primary: "",
    secondary: "",
    text: "",
  });
  const nameRef = useRef<HTMLInputElement | null>(null);

  const handleSelectedTemplate = (template: string) => {
    setSelectedTemplate(template);
    console.log(template);
  };

  const updateUserPrompt = (message: string) => {
    setUserPrompt(message);
  };

  const handleGenerate = async () => {
    if (!userPrompt || !nameRef.current?.value) {
      alert("Project Name and Prompt are required!");
      return;
    }

    if (userPrompt.trim()) {
      onSubmit({
        prompt: userPrompt.trim(),
        colors,
        language: selectedLanguage,
        template: selectedTemplate,
        projectName: nameRef.current.value,
      });
      setOpen(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant={"default"}>
          New Page
          <PlusSquareIcon />
        </Button>
      </DialogTrigger>
      <DialogContent className="min-w-3/5">
        <DialogHeader>
          <DialogTitle>Describe Your New Page</DialogTitle>
          <DialogDescription>
            <strong>Note:</strong> For the best results, provide a clear and detailed prompt describing your vision (e.g., "A cozy e-commerce site for handmade candles with warm colors"). This creates a unique design tailored to you, rather than relying on templates.<br /><br />
          </DialogDescription>
        </DialogHeader>

        <Label>Project Name: <span style={{ color: "red" }}>*</span></Label>
        <Input ref={nameRef} placeholder="e.g., My Candle Shop" />

        <AiPromptInputArea prompt={userPrompt} setPrompt={updateUserPrompt} />

        <Label>Template:</Label>
        <TemplateSelector onSelect={handleSelectedTemplate} />

        <LanguageSelector onSelect={setSelectedLanguage} />

        <ColorSelector onSelect={setColors} />

        <Button onClick={handleGenerate}>Submit</Button>
      </DialogContent>
    </Dialog>
  );
};

export default AiModal;