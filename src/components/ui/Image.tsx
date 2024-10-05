interface ImageProps {
  src: string;
  alt: string;
  width?: string | number;
  height?: string | number;
  className?: string;
  sizes?: string;
}

function Image({
  src,
  alt,
  width = '100%',
  height = 'auto',
  className,
  sizes,
}: ImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      sizes={sizes}
    />
  );
}

export default Image;
