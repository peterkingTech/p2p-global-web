type Props = {
  reference: string;
  text: string;
};

export default function Quote({ reference, text }: Props) {
  return (
    <blockquote className="border-l-2 border-gold-soft/60 pl-5 italic">
      <p>&ldquo;{text}&rdquo;</p>
      <cite className="mt-2 block text-sm not-italic tracking-[0.2em] opacity-60 uppercase">{reference}</cite>
    </blockquote>
  );
}
