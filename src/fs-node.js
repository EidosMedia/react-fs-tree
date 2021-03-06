import PropTypes from 'prop-types';
import React from 'react';

import Icons from './icons';
import { exports } from './module';
import Shapes from './shapes';

class FSNode extends React.Component {
  static propTypes = {
    node: Shapes.Node.isRequired,
    parentNode: PropTypes.instanceOf(React.Component).isRequired,
    root: PropTypes.instanceOf(React.Component).isRequired,
    depth: PropTypes.number,
    virtual: PropTypes.bool,
    noninteractive: PropTypes.bool,
    onSelect: PropTypes.func,
    onDeselect: PropTypes.func,
    onSelectChange: PropTypes.func,
    onClose: PropTypes.func,
    onOpen: PropTypes.func,
    onOpenChange: PropTypes.func,
    hasChildNodes: PropTypes.bool.isRequired,
    nodesCanToggle: PropTypes.bool,
    index: PropTypes.number
  };

  static defaultProps = {
    depth: 0,
    virtual: false,
    noninteractive: false,
    onSelect: () => {},
    onDeselect: () => {},
    onSelectChange: () => {},
    onClose: () => {},
    onOpen: () => {},
    onOpenChange: () => {},
    nodesCanToggle: true
  };

  get depth() {
    return this.props.depth;
  }

  get virtual() {
    return this.props.virtual;
  }

  get parentNode() {
    return this.props.parentNode;
  }

  get root() {
    return this.props.root;
  }

  get noninteractive() {
    return this.props.noninteractive;
  }

  get childNodes() {
    return [...this._childNodes];
  }

  get branchedOut() {
    return !!this.props.node.childNodes;
  }

  get path() {
    return this._path;
  }

  get name() {
    return this.props.node.name;
  }

  get opened() {
    return this.state.opened;
  }

  get selected() {
    return this.state.selected;
  }

  get physicalPath() {
    return this._physicalPath;
  }

  get subPath() {
    return this._subPath;
  }

  constructor(props) {
    super(props);

    this._type = props.node.type;
    this._iconComponent = props.node.IconComponent;
    this._path = this._getNodePath();
    this._physicalPath = this._getPhysicalPath();
    this._subPath = this._getNodeSubPath();
    this._childNodes = [];

    this.state = {
      node: props.node
    };

    if (props.virtual) {
      this._createVirtualChildNodes();
    }
  }

  componentDidMount() {
    this._mounted = true;
  }

  componentWillUpdate() {
    this._childNodes = [];
  }

  componentDidUpdate() {
    if (!this.state.opened) {
      this._createVirtualChildNodes();
    }
  }

  componentWillUnmount() {
    this._mounted = false;
  }

  render() {
    return (
      <div className="FSNode">
        <div className={this._getWrapClass()} style={this._getWrapStyle(this.props.index)}>
          <div className="FSNode-node">
            <div className="FSNode-descriptor" onClick={!this.props.noninteractive ? this.handleSelection : undefined}>
              <div className={'FSNode-descriptor-container'} style={this._getNodeStyle()}>
                <div className="FSNode-icon" onClick={this.props.hasChildNodes ? this.handleToggleOpen : undefined}>
                  {this._getIcon()}
                </div>
                <div className="FSNode-text" path={this.props.node.path}>{this.props.node.name}</div>
              </div>
              {this.state.selected && <Icons.Check />}
            </div>
            {this.props.node.childNodes && this.state.opened && (
              <exports.FSBranch
                ref={(ref) => ref && (this._childNodes = ref._childNodes)}
                childNodes={this.props.node.childNodes}
                parentNode={this}
                root={this.props.root}
                depth={this.props.depth}
                noninteractive={this.props.noninteractive}
                onSelect={this.props.onSelect}
                onDeselect={this.props.onDeselect}
                onSelectChange={this.props.onSelectChange}
                onOpen={this.props.onOpen}
                onClose={this.props.onClose}
                onOpenChange={this.props.onOpenChange}
                nodesCanToggle={this.props.nodesCanToggle}
              />
            )}
          </div>
        </div>
      </div>
    );
  }

  select(onSelect = () => {}) {
    const callback = (resolve = Promise.resolve.bind(Promise)) => {
      this.props.onSelect(this);
      this.props.onSelectChange(this);
      onSelect(this);

      return resolve(this);
    };

    if (this.state.selected) return callback();

    if (!this._mounted) {
      const node = this.state;
      node.selected = true;

      return callback();
    }

    return new Promise((resolve) => {
      if (this._mounted) {
        this.setState(
          {
            node: Object.assign(this.state, {
              selected: true
            })
          },
          () => {
            callback(resolve);
          }
        );
        return;
      }
      callback(resolve);
    });
  }

  deselect(onDeselect = () => {}) {
    const callback = (resolve = Promise.resolve.bind(Promise)) => {
      this.props.onDeselect(this);
      this.props.onSelectChange(this);
      onDeselect(this);

      return resolve(this);
    };

    if (!this.state.selected) return callback();

    if (!this._mounted) {
      const node = this.state;
      node.selected = false;

      return callback();
    }

    return new Promise((resolve) => {
      if (this._mounted) {
        this.setState(
          {
            node: Object.assign(this.state, {
              selected: false
            })
          },
          () => {
            callback(resolve);
          }
        );
        return;
      }
      callback(resolve);
    });
  }

  toggleSelect(onToggle) {
    if (this.props.nodesCanToggle) {
      return this.state.selected ? this.deselect(onToggle) : this.select(onToggle);
    }
    this.select(onToggle);
  }

  handleSelection = (e) => {
    e.stopPropagation();
    this.toggleSelect();
  };

  close(onClose = () => {}) {
    const callback = (resolve = Promise.resolve.bind(Promise)) => {
      this.props.onClose(this);
      this.props.onOpenChange(this);
      onClose(this);

      return resolve(this);
    };

    if (!this.props.node.childNodes) return callback();
    if (!this.state.opened) return callback();

    return new Promise((resolve) => {
      if (this._mounted) {
        this.setState(
          {
            node: Object.assign(this.state, {
              opened: false
            })
          },
          () => {
            callback(resolve);
          }
        );
        return;
      }
      callback(resolve);
    });
  }

  open(onOpen = () => {}) {
    const callback = (resolve = Promise.resolve.bind(Promise)) => {
      this.props.onOpen(this);
      this.props.onOpenChange(this);
      onOpen(this);

      return resolve(this);
    };

    if (!this.props.node.childNodes) return callback();
    if (this.state.opened) return callback();

    return new Promise((resolve) => {
      if (this._mounted) {
        this.setState(
          {
            node: Object.assign(this.state, {
              opened: true
            })
          },
          () => {
            callback(resolve);
          }
        );
        return;
      }
      callback(resolve);
    });
  }

  toggleOpen(onToggle) {
    return this.state.opened ? this.close(onToggle) : this.open(onToggle);
  }

  handleToggleOpen = (e) => {
    e.stopPropagation();
    this.toggleOpen();
  };

  _getWrapClass = () => {
    const selected = this.state.selected ? 'FSNode-selected' : 'FSNode-deselected';

    return `FSNode-wrap ${selected}`;
  };

  _getDepthSize = (depth = this.depth) => {
    const baseSpacing = 16;
    const depthSize = 25;
    const padding = baseSpacing + depthSize * depth;
    return (this.props.hasChildNodes && padding - depthSize) || padding;
  };

  _getWrapStyle = (i) => {
    const translateX = this._getDepthSize(this.depth - 1);
    const firstAtAll = this.props.depth === 1 && i === 0;

    const styles = {
      transform: `translateX(-${translateX})`,
      width: `calc(100% + ${translateX})`
    };

    return (firstAtAll && { ...styles, border: 'none' }) || styles;
  };

  _getNodeStyle = () => {
    return {
      paddingLeft: this._getDepthSize(this.depth),
      zIndex: this.depth
    };
  };

  _getIcon = () => {
    const getIconType = () => {
      if (this._iconComponent) {
        return this._iconComponent;
      }
      const type = this._type.toLowerCase().charAt(0).toUpperCase() + this._type.toLowerCase().slice(1);
      const IconType = Icons[type];
      return <IconType />;
    };
    const Caret = !this.state.opened ? Icons.CaretClosed : Icons.CaretOpen;

    if (!this.props.node.childNodes) {
      switch (this.state.mode) {
        case 'a':
          return (
            <span onClick={!this.props.noninteractive && (() => this.toggleSelect())}>
              <span className="FSNode-mode FSNode-mode-a">A</span>
              <Icons.File />
            </span>
          );
        case 'd':
          return (
            <span onClick={!this.props.noninteractive && (() => this.toggleSelect())}>
              <span className="FSNode-mode FSNode-mode-d">D</span>
              <Icons.File />
            </span>
          );
        case 'm':
          return (
            <span onClick={!this.props.noninteractive && (() => this.toggleSelect())}>
              <span className="FSNode-mode FSNode-mode-m">M</span>
              <Icons.File />
            </span>
          );
        default:
          return <Icons.File onClick={!this.props.noninteractive && (() => this.toggleSelect())} />;
      }
    } else if (!this.props.hasChildNodes) {
      return <span>{getIconType()}</span>;
    }
    return (
      <span>
        <Caret />
        {getIconType()}
      </span>
    );
  };

  _createVirtualChildNodes() {
    if (!this.props.node.childNodes) return;

    this.props.node.childNodes.forEach((node) => {
      const ref = new FSNode({
        node,
        virtual: true,
        parentNode: this,
        root: this.props.root,
        depth: this.props.depth + 1,
        noninteractive: this.props.noninteractive,
        onSelect: this.props.onSelect,
        onDeselect: this.props.onDeselect,
        onSelectChange: this.props.onSelectChange,
        onOpen: this.props.onOpen,
        onClose: this.props.onClose,
        onOpenChange: this.props.onOpenChange
      });

      this._childNodes.push(ref);
    });
  }

  _getAnchestorWorkFolder = (anchestor) => {
    if (anchestor._type === 'workFolder') {
      return anchestor;
    }

    return this._getAnchestorWorkFolder(anchestor.props.parentNode);
  };

  _getWorkFolderPath = () => {
    return this.props.parentNode._path + '/' + this.props.node.name;
  };

  _getSubWorkFodlerPath = () => {
    const anchestor = this._getAnchestorWorkFolder(this.props.parentNode);
    return anchestor.path;
  };

  _getNodePath = () => {
    switch (this._type) {
      case 'workFolder':
        return this._getWorkFolderPath();
      case 'subWorkFolder':
        return this._getSubWorkFodlerPath();
      default:
        return '/';
    }
  };

  _getSubPath = () => {
    return this._physicalPath.substr(this._path.length, this._physicalPath.length);
  };

  _getNodeSubPath = () => {
    if (this._type === 'subWorkFolder') {
      return this._getSubPath();
    }
    return null;
  };

  _composePhysicalPath = (node, path) => {
    const _physicalPath = `${node.props.node.name}${path && '/' + path}`;
    if (node.props.parentNode._type === 'workFolder') {
      return `${this._path}/${_physicalPath}`;
    }
    return this._composePhysicalPath(node.props.parentNode, _physicalPath);
  };

  _getPhysicalPath = () => {
    switch (this._type) {
      case 'workFolder':
        return this._path;
      case 'subWorkFolder':
        return this._composePhysicalPath(this, '');
      default:
        return '/';
    }
  };
}

exports.FSNode = FSNode;
