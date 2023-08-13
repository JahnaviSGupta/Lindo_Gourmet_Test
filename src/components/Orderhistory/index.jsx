import Breadcrumbs from "../Breadcrumbs";
// import EmptyWishlistError from "../EmptyWishlistError";
import PageTitle from "../Helpers/PageTitle";
import Layout from "../Layout";
import Orders from "./Orders";

export default function OrderHistory({ orderhistory = true }) {
  return (
    <Layout childrenClasses={orderhistory ? "pt-0 pb-0" : ""}>
      {orderhistory === false ? (
        <div className="orderhistory-page-wrapper w-full">
          <div className="container-x mx-auto">
            <Breadcrumbs
              paths={[
                { name: "home", path: "/" },
                { name: "orderhistory", path: "/orderhistory" },
              ]}
            />
            {/* <EmptyWishlistError /> */}
          </div>
        </div>
      ) : (
        <div className="orderhistory-page-wrapper w-full bg-white pb-[60px]">
          <div className="w-full">
            <PageTitle
              title="Order History"
              breadcrumb={[
                { name: "home", path: "/" },
                { name: "orderhistory", path: "/orderhistory" },
              ]}
            />
          </div>
          <div className="w-full mt-[23px]">
            <div className="container-x mx-auto">
              <Orders className="mb-[30px]" />
              <div className="w-full mt-[30px] flex sm:justify-end justify-start">
                <div className="sm:flex sm:space-x-[30px] items-center">
                  <button type="button">
                    <div className="w-full text-sm font-semibold text-qred mb-5 sm:mb-0">
                      Clean Order History
                    </div>
                  </button>
                  <div className="w-[180px] h-[50px]">
                    <button type="button" className="yellow-btn">
                      <div className="w-full text-sm font-semibold">
                        Add to Cart All
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}
