import styled from "styled-components";

interface StyledProps {
    name?: string;
    pos?: string;
    top?: string;
    right?: string;
    left?: string;
    bottom?: string;
    lineHeight?: string;
    radius?: string;
    w?: string;
    h?: string;
    p?: string;
    pl?: string;
    pr?: string;
    pt?: string;
    pb?: string;
    m?: string;
    ml?: string;
    mr?: string;
    mt?: string;
    mb?: string;
    display?: string;
    justify?: string;
    flexdir?: string;
    align?: string; 
    bg?: string;
    src?: string;
    href?: string;
    gap?: string;
    color?: string;
    alt?: string;
    fontSize?: string;
    textAlign?: string;
    fontWeight?: string;
    border?: string;
    borderTop?: string;
    borderRight?: string;
    borderLeft?: string;
    borderBottom?: string;
    type?: string;
    placeholder?: string;
    minH?: string;
    wrap?: string;
}

export const Container = styled.div<StyledProps>`
display: none;
    @media only screen and (max-width: 500px){
        width: ${props => props.w || "auto"};
        height: ${props => props.h || "auto"};
        min-height: ${props => props.minH};
        background: ${props => props.bg};
        display: ${props => props.display || "block"};
        gap: ${props => props.gap};
        justify-content: ${props => props.justify};
        align-items: ${props => props.align};
        flex-direction: ${props => props.flexdir};
        padding: ${props => props.p};
        padding-top: ${props => props.pt};
        padding-right: ${props => props.pr};
        padding-left: ${props => props.pl};
        padding-bottom: ${props => props.pb};
        margin: ${props => props.m};
        margin-top: ${props => props.mt};
        margin-right: ${props => props.mr};
        margin-left: ${props => props.ml};
        margin-bottom: ${props => props.mb};
        border: ${props => props.border};
        border-radius: ${props => props.radius};
        flex-wrap: ${props => props.wrap};

            & .icon{
                width: 18px;
                height: 18px;
                color: #6F6F6F;
                transform: rotate(0deg);
                transition-duration: .4s;
                transition-property: all;

                &:active{
                    scale: 1.5;
                    transform: skewX(30deg);
                }
                
                    &.like{
                        color: #309900;
                        fill: #309900;
                        rotate: 360deg;
                    }
                    &.dislike{
                        color: #900000;
                        fill: #900000;
                        rotate: -360deg;
                    }
            }
    }
`;

export const Image = styled.img<StyledProps>`
        @media only screen and (max-width: 500px){
            width: ${props => props.w || "auto"};
            height: ${props => props.h || "auto"};
            background: ${props => props.bg || "transparent"};
            position: ${props => props.pos};
            top: ${props => props.top};
            top: ${props => props.right};
            top: ${props => props.left};
            top: ${props => props.bottom};
            display: ${props => props.display || "block"};
            flex-direction: ${props => props.flexdir || "row"};
            padding: ${props => props.p || "0px"};
            margin: ${props => props.m || "0px"};
            object-fit: contain;
        }
`;

export const Form = styled.form<StyledProps>`
    @media only screen and (max-width: 500px){
        width: ${props => props.w || "auto"};
        height: ${props => props.h || "auto"};
        background: ${props => props.bg || "transparent"};
        display: ${props => props.display || "block"};
        gap: ${props => props.gap};
        flex-direction: ${props => props.flexdir || "row"};
        padding: ${props => props.p};
        padding-top: ${props => props.pt};
        padding-right: ${props => props.pr};
        padding-left: ${props => props.pl};
        padding-bottom: ${props => props.pb};
        margin: ${props => props.m};
        margin-top: ${props => props.mt};
        margin-right: ${props => props.mr};
        margin-left: ${props => props.ml};
        margin-bottom: ${props => props.mb};
        border: ${props => props.border};
    }
`;

export const Text = styled.p<StyledProps>`
    @media only screen and (max-width: 500px){
        display: ${props => props.display};
        color: ${props => props.color || "black"};
        text-align: ${props => props.textAlign};
        font-size: ${props => props.fontSize || "black"};
        font-weight: ${props => props.fontWeight || "normal"};
        line-height: ${props => props.lineHeight};
        padding: ${props => props.p};
        padding-top: ${props => props.pt};
        padding-right: ${props => props.pr};
        padding-left: ${props => props.pl};
        padding-bottom: ${props => props.pb};
        margin: ${props => props.m};
        margin-top: ${props => props.mt};
        margin-right: ${props => props.mr};
        margin-left: ${props => props.ml};
        margin-bottom: ${props => props.mb};
        border-radius: ${props => props.radius};
              flex-wrap: ${props => props.wrap};
    }
`;

export const Label = styled.label<StyledProps>`
    @media only screen and (max-width: 500px){
    width: ${props => props.w || "auto"};
        height: ${props => props.h || "auto"};
        background: ${props => props.bg || "transparent"};
        display: ${props => props.display || "block"};
        gap: ${props => props.gap || "0px"};
        justify-content: ${props => props.justify || "none"};
        align-items: ${props => props.align || "none"};
        flex-direction: ${props => props.flexdir || "row"};
        padding: ${props => props.p};
        padding-top: ${props => props.pt};
        padding-right: ${props => props.pr};
        padding-left: ${props => props.pl};
        padding-bottom: ${props => props.pb};
        margin: ${props => props.m};
        margin-top: ${props => props.mt};
        margin-right: ${props => props.mr};
        margin-left: ${props => props.ml};
        margin-bottom: ${props => props.mb};
        border: ${props => props.border || "0px"};
        color: ${props => props.color || "black"};
        font-size: ${props => props.fontSize || "black"};
        font-weight: ${props => props.fontWeight || "normal"};
        line-height: ${props => props.lineHeight};
    }
`;

export const Input = styled.input<StyledProps>`
         @media only screen and (max-width: 500px){
        width: ${props => props.w || "auto"};
        height: ${props => props.h || "auto"};
        min-height: ${props => props.minH};
        background: ${props => props.bg || "transparent"};
        display: ${props => props.display || "block"};
        gap: ${props => props.gap || "0px"};
        justify-content: ${props => props.justify || "none"};
        align-items: ${props => props.align || "none"};
        flex-direction: ${props => props.flexdir || "row"};
        border-radius: ${props => props.radius || "0px"};
        border: ${props => props.border};
        padding: ${props => props.p};
        padding-top: ${props => props.pt};
        padding-right: ${props => props.pr};
        padding-left: ${props => props.pl};
        padding-bottom: ${props => props.pb};
        margin: ${props => props.m};
        margin-top: ${props => props.mt};
        margin-right: ${props => props.mr};
        margin-left: ${props => props.ml};
        margin-bottom: ${props => props.mb};
        border: ${props => props.border || "0px"};
        color: ${props => props.color || "black"};
        font-size: ${props => props.fontSize || "black"};
        font-weight: ${props => props.fontWeight || "normal"};
        line-height: ${props => props.lineHeight};
        text-overflow: ellipsis;
        word-wrap: break-word;
         }
`;

export const TextArea = styled.textarea<StyledProps>`
    @media only screen and (max-width: 500px){
        width: ${props => props.w || "auto"};
        height: ${props => props.h || "auto"};
        min-height: ${props => props.minH};
        background: ${props => props.bg || "transparent"};
        display: ${props => props.display || "block"};
        gap: ${props => props.gap || "0px"};
        justify-content: ${props => props.justify || "none"};
        align-items: ${props => props.align || "none"};
        flex-direction: ${props => props.flexdir || "row"};
        border-radius: ${props => props.radius || "0px"};
        border: ${props => props.border};
        padding: ${props => props.p};
        padding-top: ${props => props.pt};
        padding-right: ${props => props.pr};
        padding-left: ${props => props.pl};
        padding-bottom: ${props => props.pb};
        margin: ${props => props.m};
        margin-top: ${props => props.mt};
        margin-right: ${props => props.mr};
        margin-left: ${props => props.ml};
        margin-bottom: ${props => props.mb};
        border: ${props => props.border || "0px"};
        color: ${props => props.color || "black"};
        font-size: ${props => props.fontSize || "black"};
        font-weight: ${props => props.fontWeight || "normal"};
        line-height: ${props => props.lineHeight};
        text-overflow: ellipsis;
        word-wrap: break-word;
    }
`;

export const Button = styled.button<StyledProps>`
    @media only screen and (max-width: 500px){
        width: ${props => props.w || "auto"};
        height: ${props => props.h || "auto"};
        background: ${props => props.bg || "transparent"};
        display: ${props => props.display || "block"};
        gap: ${props => props.gap || "0px"};
        justify-content: ${props => props.justify || "none"};
        align-items: ${props => props.align || "none"};
        flex-direction: ${props => props.flexdir || "row"};
        padding: ${props => props.p};
        padding-top: ${props => props.pt};
        padding-right: ${props => props.pr};
        padding-left: ${props => props.pl};
        padding-bottom: ${props => props.pb};
        margin: ${props => props.m};
        margin-top: ${props => props.mt};
        margin-right: ${props => props.mr};
        margin-left: ${props => props.ml};
        margin-bottom: ${props => props.mb};
        color: ${props => props.color || "black"};
        font-size: ${props => props.fontSize || "black"};
        font-weight: ${props => props.fontWeight || "normal"};
        line-height: ${props => props.lineHeight};
        border: ${props => props.border};
        border-radius: ${props => props.radius};
    }
`;

export const Hr = styled.div<StyledProps>`
    @media only screen and (max-width: 500px){
        width: ${props => props.w || "auto"};
        height: ${props => props.h || "auto"};
        background: ${props => props.bg || "transparent"};
        border-radius: ${props => props.radius || "0px"};
        margin: ${props => props.m};
        border: ${props => props.border};
    }
`;

export const Link = styled.a<StyledProps>`
    @media only screen and (max-width: 500px){
        width: ${props => props.w || "auto"};
        height: ${props => props.h || "auto"};
        background: ${props => props.bg || "transparent"};
        display: ${props => props.display || "block"};
        gap: ${props => props.gap || "0px"};
        justify-content: ${props => props.justify || "none"};
        align-items: ${props => props.align || "none"};
        flex-direction: ${props => props.flexdir || "row"};
        border-radius: ${props => props.radius || "0px"};
        padding: ${props => props.p};
        padding-top: ${props => props.pt};
        padding-right: ${props => props.pr};
        padding-left: ${props => props.pl};
        padding-bottom: ${props => props.pb};
        margin: ${props => props.m};
        margin-top: ${props => props.mt};
        margin-right: ${props => props.mr};
        margin-left: ${props => props.ml};
        margin-bottom: ${props => props.mb};
        border: ${props => props.border || "0px"};
        color: ${props => props.color || "black"};
        font-size: ${props => props.fontSize || "black"};
        font-weight: ${props => props.fontWeight || "normal"};
        line-height: ${props => props.lineHeight};
       }
`;

export const Spinner = styled.div`
    width: 35px;
    height: 35px;
    border-radius: 50%;
    border: 5px solid transparent;
    border-top-color: white;
    border-right-color: white;
    animation: rotacao 2s infinite linear;

    @keyframes rotacao {
        0%{
            transform: rotate(0deg);
        } 100% {
            transform: rotate(360deg);
        }
    }
`;

export const Title = styled.h1<StyledProps>`
        @media only screen and (max-width: 500px){
            width: ${props => props.w};
            height: ${props => props.h};
            background: ${props => props.bg};
            display: ${props => props.display};
            gap: ${props => props.gap};
            padding: ${props => props.p};
            padding-top: ${props => props.pt};
            padding-right: ${props => props.pr};
            padding-left: ${props => props.pl};
            padding-bottom: ${props => props.pb};
            margin: ${props => props.m};
            margin-top: ${props => props.mt};
            margin-right: ${props => props.mr};
            margin-left: ${props => props.ml};
            margin-bottom: ${props => props.mb};
            border: ${props => props.border};
            color: ${props => props.color};
            font-size: ${props => props.fontSize};
            font-weight: ${props => props.fontWeight};
            line-height: ${props => props.lineHeight};
        }
`;

export const List = styled.ul<StyledProps>`
        @media only screen and (max-width: 500px){
        width: ${props => props.w};
        height: ${props => props.h};
        background: ${props => props.bg};
        display: ${props => props.display};
        gap: ${props => props.gap};
        justify-content: ${props => props.justify};
        align-items: ${props => props.align};
        flex-direction: ${props => props.flexdir};
        padding: ${props => props.p};
        padding-top: ${props => props.pt};
        padding-right: ${props => props.pr};
        padding-left: ${props => props.pl};
        padding-bottom: ${props => props.pb};
        margin: ${props => props.m};
        margin-top: ${props => props.mt};
        margin-right: ${props => props.mr};
        margin-left: ${props => props.ml};
        margin-bottom: ${props => props.mb};
        flex-wrap: ${props => props.wrap};
    }
`;

export const Items = styled.li<StyledProps>`
      @media only screen and (max-width: 500px){
        width: ${props => props.w};
        height: ${props => props.h};
        background: ${props => props.bg};
        display: ${props => props.display};
        gap: ${props => props.gap};
        justify-content: ${props => props.justify};
        align-items: ${props => props.align};
        flex-direction: ${props => props.flexdir};
        padding: ${props => props.p};
        padding-top: ${props => props.pt};
        padding-right: ${props => props.pr};
        padding-left: ${props => props.pl};
        padding-bottom: ${props => props.pb};
        margin: ${props => props.m};
        margin-top: ${props => props.mt};
        margin-right: ${props => props.mr};
        margin-left: ${props => props.ml};
        margin-bottom: ${props => props.mb};
        border: ${props => props.border};
        border-radius: ${props => props.radius};
        flex-wrap: ${props => props.wrap};
    }
`;