import {css} from '@emotion/core'

const flexRowString = `
    display: flex;
    flex-direction: row
`;

const flexColString = `
    display: flex;
    flex-direction: column
`;

export const flexAlignCenter = css(`
    align-items: center
`);

export const flexSpaceBetween = css (`
    justify-content: space-between;
`);



export const flexRow = css(`
    ${flexRowString};
`);

export const flexRowCenter = css(`
    ${flexRowString};
    justify-content: center;
`);


export const flexRowCenterAll = css(`
    ${flexRowString};
    justify-content: center;
    align-items: center;
`);

export const flexCol = css(`
    ${flexColString};
`);

export const flexColCenter = css(`
    ${flexColString};
    justify-content: center;
`);


export const flexColCenterAll = css(`
    ${flexColString};
    justify-content: center;
    align-items: center;
`);