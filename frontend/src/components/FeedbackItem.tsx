interface FeedbackItemProps {
  text: string;
}

export default function FeedbackItem({ text }: FeedbackItemProps) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
      <div className="mb-3 flex items-center gap-2">
        <div className="h-2 w-2 rounded-full bg-emerald-400" />

        <span className="text-xs font-medium text-slate-500">Anonymous</span>
      </div>

      <p className="text-sm leading-6 text-slate-300">{text}</p>
    </div>
  );
}
