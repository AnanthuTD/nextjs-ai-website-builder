import { Button } from "@/components/ui/button";
import AvatarPlaceHolder from "../avatar-placeholder";
import { IChatFlat } from "@/types";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Loader2, WandSparklesIcon } from "lucide-react";
import ReactDOMServer from "react-dom/server";
import "./styles.css";

const ChatFlat = ({
  chat,
  own = false,
  onGenerateCode = () => {},
  isGenerating,
}: {
  chat: IChatFlat;
  own?: boolean;
  onGenerateCode: (prompt: string) => void;
  isGenerating: boolean;
}) => {
  const BlinkingCursor = () => <span className="blinking-cursor">|</span>;
  const blinkingCursorString = ReactDOMServer.renderToStaticMarkup(<BlinkingCursor />);

  return (
    <div className="flex gap-2 w-full">
      <div className="p-1 rounded-lg w-full">
        <div className="flex flex-col gap-1">
          <p className={`text-xs flex gap-2 items-center text-orange-800 ${own ? "place-self-end flex-row-reverse" : ""}`}>
            <AvatarPlaceHolder value={chat.userId[0]} width={30} />
            {chat.userId}
          </p>

          <div className={`flex ${own ? "flex-row-reverse" : ""} items-center gap-4 w-full`}>
            <div className="w-full">
              <div className={`${own ? "place-self-end" : ""}`}>
                {chat.userId === "ai" ? (
                  <div className="p-1 rounded-md outline-1 prose prose-sm max-w-full">
                    <div className="relative flex items-start">
                      <ReactMarkdown 
                        remarkPlugins={[remarkGfm]}
                        components={{
                          p: ({ children }) => (
                            <p dangerouslySetInnerHTML={{ __html: children?.toString() || "" }} />
                          ),
                        }}
                      >
                        {(chat.message as string || "") + (isGenerating ? blinkingCursorString : "")}
                      </ReactMarkdown>
                    </div>
                    {chat.refinedPrompt && (
                      <Button
                        onClick={() => onGenerateCode(chat.message as string)}
                        disabled={isGenerating}
                        className="mt-2"
                      >
                        <WandSparklesIcon color="#b10abd" />
                        Generate
                        {isGenerating && <Loader2 className="animate-spin ml-2" />}
                      </Button>
                    )}
                  </div>
                ) : (
                  <div className="p-2 rounded-md outline-1">{chat.message}</div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatFlat;