export const Section = ({ title, children }) => { 
    return (
    <section>
        <h1 className="SectionTitle" style={{marginLeft: "200px"}}>{title}</h1>
        {children}
  </section>
);
}