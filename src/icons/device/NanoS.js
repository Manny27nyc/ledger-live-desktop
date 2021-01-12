// @flow

import React from 'react'

export default ({ size, color = 'currentColor', ...p }: { size: number, color: string }) => (
  <svg viewBox="0 0 9 34" height={size} width={size} {...p}>
    <path
      fill={color}
      d="M8 17.451c-.51562-.68629-1.2037-1.2356-2-1.5835V1.9995H2v13.868c-.79625.3479-1.4844.89718-2 1.5835V1.44C0 .64471.64471 0 1.44 0h5.12C7.35529 0 8 .64471 8 1.44v.75355h.40706c.32747 0 .59294.26547.59294.59294v1.0077c0 .32747-.26547.59294-.59294.59294H8v6.5806h.40706c.32747 0 .59294.26547.59294.59294v1.0077c0 .32747-.26547.59294-.59294.59294H8v4.2898zm-4 6.4844c-.55228 0-1-.44772-1-1s.44772-1 1-1 1 .44772 1 1-.44772 1-1 1zm-2 8.0645h4v-11.548c0-1.1046-.89543-2-2-2s-2 .89543-2 2v11.548zm2-15.548c2.2091 0 4 1.7909 4 4v12.363c0 .65494-.53094 1.1859-1.1859 1.1859H1.1859C.53096 34.0008 0 33.46986 0 32.8149v-12.363c0-2.2091 1.7909-4 4-4z"
    />
  </svg>
)
