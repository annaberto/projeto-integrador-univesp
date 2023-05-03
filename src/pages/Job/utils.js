const handleRegisterJob = () => {
  const [values, setValues] = useState();

  Axios.post("http://localhost:3001/cadastrar-vaga", {
    name: values.name,
    cost: values.cost,
    category: values.category,
  }).then(() => {
    Axios.post("http://localhost:3001/search", {
      name: values.name,
      cost: values.cost,
      category: values.category,
    }).then((response) => {
      setListCard([
        ...listCard,
        {
          id: response.data[0].id,
          name: values.name,
          cost: values.cost,
          category: values.category,
        },
      ]);
    });
  });
};
