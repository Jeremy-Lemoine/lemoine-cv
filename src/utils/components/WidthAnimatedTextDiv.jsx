import React from "react";

const DEFAULT_ANIMATION_LENGTH = 500;

class WidthAnimatedTextDiv extends React.Component {
	constructor({ animationLength, delayBefore, children }) {
		super();
		this.state = {
			text: children,
			animationLength: animationLength || DEFAULT_ANIMATION_LENGTH,
			delayBefore: delayBefore || 0,
		};
		this.textRef = React.createRef();
		this.textInnerRef = React.createRef();
		this.changeText(children, { noDelayBefore: true });
	}

	changeText(text, options) {
		setTimeout(
			() => {
				if (this.textRef.current) {
					this.textRef.current.style.width = "0";
					this.textRef.current.style.paddingLeft = "0";
					this.textRef.current.style.paddingRight = "0";
					if (this.textInnerRef.current) {
						this.textInnerRef.current.style.marginLeft = `-${this.textRef.current.scrollWidth/2}px`;
						this.textInnerRef.current.style.marginRight = `${this.textRef.current.scrollWidth/2}px`;
					}
				}
				setTimeout(
					() => {
						this.setState(
							{
								text: text,
							},
							() => {
								if (this.textRef.current) {
									this.textRef.current.style.width = `${this.textRef.current.scrollWidth}px`;
									this.textRef.current.style.paddingLeft = "5px";
									this.textRef.current.style.paddingRight = "5px";
									if (this.textInnerRef.current) {
										this.textInnerRef.current.style.marginLeft = "0";
										this.textInnerRef.current.style.marginRight = "0";
									}
								}
							}
						);
					},
					options && options.noDelayBefore ? 0 : this.state.animationLength / 2
				);
			},
			options && options.noDelayBefore ? 0 : this.state.delayBefore
		);
		return;
	}

	render() {
		return (
			<div
				ref={this.textRef}
				className='width-animated-text-div'
				style={{ transition: `all ease-in-out ${this.state.animationLength / 2}ms` }}>
				<span
					ref={this.textInnerRef}
					style={{ transition: `all ease-in-out ${this.state.animationLength / 2}ms` }}>
					{this.state.text}
				</span>
			</div>
		);
	}
}

export default WidthAnimatedTextDiv;
