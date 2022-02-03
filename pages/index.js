import Layout from "@components/layout";

export default function IndexPage() {
  return (
    <Layout>
      
      <div>
        <input type="text" placeholder="Full Name" />
        <input type="text" placeholder="City" />
        <input type="text" placeholder="Email or Phone Number" />
        <input type="password" placeholder="Password" />
      </div>

    </Layout>
  );
}
