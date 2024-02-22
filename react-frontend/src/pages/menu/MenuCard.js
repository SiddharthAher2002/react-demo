
const MenuCard = (props) => {
    let {item} = props;
    return (
        <div className="col-3 mb-4">
            <div className="menu card">
                <div className="card-body d-flex justify-content-center">
                    <img className="coffe-images" src={item.image} />
                </div>
                <div className="card-footer">
                    <h6>{item.title}</h6>
                    <span>{item.description}</span>
                </div>
            </div>
        </div>
    )
}
export default MenuCard;