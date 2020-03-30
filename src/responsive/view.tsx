import React, { ReactElement } from 'react'
import { Media } from './media';

export type ScreenSize = 'sm' | 'md' | 'lg';

interface PropTypes {
    className?: string;
    id?: string;
    render: (isMobile: boolean, screenSize?: ScreenSize) => ReactElement;
}

const ResponsiveView = (props: PropTypes) => {
    const { render, className, id } = props;

    return (
        <div id={id} className={`responsive-view${className ? ` ${className}` : ''}`}>
            <Media lessThan="md">
                {render(true, 'sm')}
            </Media>

            <Media between={['md', 'lg']}>
                {render(false, 'md')}
            </Media>

            <Media greaterThanOrEqual="lg">
                {render(false, 'lg')}
            </Media>
        </div>
    )
}

export default ResponsiveView
