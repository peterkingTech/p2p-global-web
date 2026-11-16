type Props = {
  reference: string;
  text: string;
};

export default function Quote({ reference, text }: Props) {
  return (
    <blockquote className="border-s-2 border-gold/60 ps-5">
      <p className="type-scripture text-[1.2em]">&ldquo;{text}&rdquo;</p>
      <cite className="type-eyebrow mt-3 block not-italic">{reference}</cite>
    </blockquote>
  );
}
