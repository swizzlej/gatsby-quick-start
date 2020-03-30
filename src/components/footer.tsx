import React from 'react'
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import CopyrightOutlined from '@material-ui/icons/CopyrightOutlined'
import { Media } from '../responsive/media'
import { flexColCenterAll, flexRowCenter } from '../common/format-styles'

interface PropTypes {
  isMobile: boolean;
}

const Footer = (props: PropTypes) => {
    const { isMobile } = props;
    const styles = css(`
        padding: 5%;
    `);

    return (
        <footer id="contact" css={[styles, flexColCenterAll]}>
            <span className="copy" css={flexRowCenter}><CopyrightOutlined /> 2019 Gentlecare Ambulance Service</span>
        </footer>
    );
}

export default Footer;