import React, { Component } from "react";
import PropTypes from "prop-types";

const DEFAULT_ANIMATION_LENGTH = 200;
const FADE = { IN: 1, OUT: 0 };

class FadeProps extends Component {
	static propTypes = {
		children: PropTypes.element,
		animationLength: PropTypes.number,
		delayBefore: PropTypes.number,
		delayBetween: PropTypes.number,
	};

	static defaultProps = {
		animationLength: DEFAULT_ANIMATION_LENGTH,
		delayBefore: 0,
		delayBetween: 0,
	};

	constructor(props) {
		super(props);
		
		const currentChild = props.children ? React.Children.only(props.children) : null;

		this.state = {
			currentChild,
			direction: currentChild ? FADE.IN : FADE.OUT,
		};

		this.nextChild = null;
		this.timeoutId = null;
	}

	componentWillUnmount() {
		clearTimeout(this.timeoutId);
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevProps.children !== this.props.children) {
			this.nextChild = this.props.children ? React.Children.only(this.props.children) : null;

			this.fade();
		}
	}

	fade() {
		/*  Fade immediately if there is no current child */
		if (!this.state.currentChild) {
			setTimeout(() => this.queueNextChild(), this.props.delayBefore);
			return;
		}

		/* If timeoutId is not set, then no fade is currently in progress, so let's
		 * start the fade! */
		if (!this.timeoutId) {
			setTimeout(() => {
				this.timeoutId = setTimeout(this.queueNextChild, this.props.animationLength + this.props.delayBetween);
				this.setState(({ direction }) => ({ direction: +!direction }));
			}, this.props.delayBefore);
			return;
		}

		if (this.nextChild === this.state.currentChild) {
			clearTimeout(this.timeoutId);
			this.timeoutId = null;
			this.setState(({ direction }) => ({ direction: +!direction }));
			return;
		}
	}

	queueNextChild = () => {
		const currentChild = this.nextChild;
		this.nextChild = null;
		this.timeoutId = null;

		this.setState(({ direction }) => ({
			...(currentChild ? { direction: +!direction } : {}),
			currentChild,
		}));
	};

	render() {
		const { direction, currentChild } = this.state;
		const { animationLength } = this.props;

		return (
			<div
				className={this.props.className}
				style={{
					transition: `opacity ${animationLength}ms ease-in`,
					opacity: direction,
				}}
				children={currentChild}
			/>
		);
	}
}

export default FadeProps;
export { DEFAULT_ANIMATION_LENGTH };
