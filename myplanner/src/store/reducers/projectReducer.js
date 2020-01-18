const initState = {
  projects: [
    {id: "1", title: "Help me find Peach", content: "Proident deserunt elit excepteur elit do ullamco ea veniam duis sunt anim et. Voluptate culpa tempor adipisicing reprehenderit commodo reprehenderit labore ut. Pariatur sint eu ullamco exercitation laborum Lorem amet Lorem eu reprehenderit non veniam nulla. Ipsum anim dolor consectetur minim cupidatat amet laboris ullamco id ad aliquip velit. Est duis sint ea enim est aute qui. Adipisicing eiusmod incididunt nulla qui mollit aliquip magna anim nisi eiusmod." },
    {id: "2", title: "Collect all the stars", content: "Nostrud Lorem fugiat magna esse duis est cupidatat aliqua minim commodo enim consequat. Reprehenderit sunt aute officia anim labore nostrud cupidatat proident elit quis irure est sunt. Occaecat eiusmod minim do anim cillum tempor adipisicing excepteur Lorem do qui. Elit laboris elit sunt sit deserunt veniam mollit. Veniam aute sit anim sint officia." },
    {id: "3", title: "Egghunt with Yoshi", content: "Reprehenderit sint minim ea ut anim elit ad enim. Qui qui laborum sunt exercitation laborum. Aute ea ex voluptate incididunt id consectetur adipisicing elit Lorem consectetur commodo ea reprehenderit." }
  ]
}

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT':
      console.log('created project', action.project);
      break;
    default:
      return state;
  }
  return state;
}

export default projectReducer;
