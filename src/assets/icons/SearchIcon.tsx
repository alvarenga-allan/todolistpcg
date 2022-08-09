import * as React from 'react';
import { Path, Rect, Mask, G, Svg } from 'react-native-svg';
import colors from '../../../styles/colors';

function SearchIcon(props: React.SVGProps<Svg>) {
  const { fill = "#2F3036", width = 16, height = 16 } = props;
  return (
    <Svg width={width} height={height} viewBox="0 0 16 16" fill="none">
      <Mask id="mask0_45_58" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="16">
        <Path fillRule="evenodd" clipRule="evenodd" d="M6.42698 0.333313C3.06415 0.333313 0.333313 3.03771 0.333313 6.37954C0.333313 9.72137 3.06415 12.4258 6.42698 12.4258C7.68073 12.4258 8.84697 12.0497 9.81626 11.405L13.7917 15.3476C14.2206 15.773 14.9149 15.773 15.3438 15.3476C15.7743 14.9207 15.7743 14.2274 15.3438 13.8005L11.3939 9.8831C12.1031 8.89485 12.5207 7.68529 12.5207 6.37954C12.5207 3.03771 9.78982 0.333313 6.42698 0.333313ZM2.53115 6.37954C2.53115 4.24976 4.27277 2.51853 6.42698 2.51853C8.5812 2.51853 10.3228 4.24976 10.3228 6.37954C10.3228 8.50932 8.5812 10.2405 6.42698 10.2405C4.27277 10.2405 2.53115 8.50932 2.53115 6.37954Z" fill="#006FFD" />
      </Mask>
      <G mask="url(#mask0_45_58)">
        <Rect width="16" height="16" fill={fill} />
      </G>
    </Svg>
  );
}
export default SearchIcon;