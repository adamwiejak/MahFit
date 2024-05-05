interface ISlidesSwitcher extends BoxProps {
  value: number;
  images: ResponsiveImageAsset[];
  onChangeImage: (idx: number) => void;
}
