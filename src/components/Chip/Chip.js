import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Icon from '../Icon/Icon';
import Image from '../Image/Image';

import './Chip.scss';


const Chip = (props) => {
  const {
    id,
    text,
    withImage,
    withIcon,
    withClose,
    imgSrc,
    imgAlt,
    iconName,
    className,
    onChipClick,
    onCloseClick
  } = props;

  const classes = classNames(
    'chip',
    className
  );

  const onChipClickAction = () => {
    onChipClick(id);
  };

  const onCloseClickAction = (e) => {
    e.stopPropagation();
    onCloseClick(e, id);
  }

  return (
    <div onClick={ onChipClickAction } className={ classes }>
      { withImage &&
        <span className="chip__img">
          <Image src={ imgSrc } alt={ imgAlt }/>
        </span>
      }
      { withIcon &&
        <span className="chip__icon">
          <Icon name={ iconName } />
        </span>
      }
      <span className="chip__text">{ text }</span>
      {
        withClose &&
        <span onClick={ onCloseClickAction } className="chip__close">
          <Icon name="times" />
        </span>
      }
    </div>
  );
};


Chip.propTypes = {
  id: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  text: PropTypes.string.isRequired,
  withImage: PropTypes.bool,
  withIcon: PropTypes.bool,
  withClose: PropTypes.bool,
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string,
  iconName: PropTypes.string,
  classname: PropTypes.string,
  onChipClick: PropTypes.func,
  onCloseClick: PropTypes.func
};


Chip.defaultProps = {
  id: null,
  withImage: false,
  withIcon: false,
  withClose: false,
  imgSrc: '',
  imgAlt: '',
  iconName: 'user',
  onChipClick: () => {},
  onCloseClick: () => {}
}


export default Chip;
