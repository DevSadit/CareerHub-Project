import PropTypes from "prop-types";
const Category = ({ item }) => {
  const { logo, category_name, availability } = item;
  return (
    <div className="bg-[#7E90FE0D] border-none p-12 rounded-lg ">
      <img className="w-10" src={logo} />
      <h3 className="text-xl font-extrabold">{category_name}</h3>
      <p className="font-medium">{availability}</p>
    </div>
  );
};
Category.propTypes = {
  item: PropTypes.object,
};
export default Category;
