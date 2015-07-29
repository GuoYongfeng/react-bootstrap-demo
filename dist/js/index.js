// btns
var Button = ReactBootstrap.Button;

const wellStyles = {maxWidth: 400, margin: '0 auto 10px'};
const buttonsInstance = (
  <div className='well' style={wellStyles}>
    <Button bsStyle='primary' bsSize='large' block>登录</Button>
    <Button bsSize='large' block>注册</Button>
  </div>
);

React.render(buttonsInstance, document.getElementById('btns'));

// panel
var Accordion = ReactBootstrap.Accordion;
var Panel = ReactBootstrap.Panel;

const accordionInstance = (
  <Accordion>
    <Panel header='点击下拉展示' eventKey='1'>
      The dispatcher is a singleton, and operates as the central hub of data flow in a Flux application. It is essentially a registry of callbacks, and can invoke these callbacks in order. Each store registers a callback with the dispatcher. When new data comes into the dispatcher, it then uses these callbacks to propagate that data to all of the stores. The process of invoking the callbacks is initiated through the dispatch() method, which takes a data payload object as its sole argument. This payload is typically synonymous with an action.
    </Panel>

  </Accordion>
);

React.render(accordionInstance, document.getElementById('panel'));