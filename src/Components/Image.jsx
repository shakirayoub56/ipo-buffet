export function Image({ src, height, width }) {
  return (
    <div>
      <img src={src} height={height} width={width} />
    </div>
  );
}
