import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from '@emotion/styled';
import { Header, PostList } from 'components';
import { Layout } from 'layouts';
import { Link } from 'gatsby';
const PostWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 4rem 4rem 1rem 4rem;
  @media (max-width: 1000px) {
    margin: 4rem 2rem 1rem 2rem;
  }
  @media (max-width: 700px) {
    margin: 4rem 1rem 1rem 1rem;
  }
`;



const Titulo = styled.div`

  text-align: center;
  left: 50%;
  color:  #ff0000;
  padding-top:1rem;
`;

const Forme = styled.div`
form {
  background-color: #fff;
  color: #ff0000;
  justify-content: center;
  align-items: center;
  text-align: center;
  display: flex;
  border-radius: 6px;
  box-shadow: 2px 2px 10px #666;
  margin: 5px;
  padding: 5px;
  padding-top: 25px;
  width: 75%;
  position: relative;
  left: 10%;
  padding-bottom: 20px;
   @media (max-width: 700px) {
   width: 85%;
   right:40%
    border-radius: 1px;
    margin: 1px;
  padding: 1px;
  padding-top: 5px;
  font-size:10px;
  }
  
}

form button {
  background-color: red;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 12px;
   @media (max-width: 700px) {
    border: none;
  border-radius: 1px;
  padding: 2.4px;
  margin-right:10px;
  }
  box-shadow: 2px 2px 10px #666;
  cursor: pointer;
}

form input {
  padding: 5px;
  border-radius: 5px;
  border: #9b9b9b solid;
  margin-left: 20px;
   @media (max-width: 700px) {
    padding: 1px;
  border-radius: 1px;
  border: #9b9b9b solid;
  margin-left: 4px;
  }
}

form label {
  padding-right: 20px;
   @media (max-width: 700px) {
    padding-right: 4px;
  }
}
`;

const Calltoactbutton = styled.div`
  button {
    background-color: red;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 7px;
    box-shadow: 2px 2px 10px #666;
    padding: 20px;
    padding-left: 20%;
    padding-right: 20%;
    margin: 20px;
    margin-bottom: 40px;
    cursor: pointer;
  }
`;




const Index = ({ data }) => {
  const { edges } = data.allMarkdownRemark;

  return (
    <Layout>
      <Helmet title={'SOS Colombia'} />
      <Header title="SOS Colombia">
        Este es tu espacio para conocer toda la información acerca del paro
        Nacional del año 2021
      </Header>
 <Titulo><h2>Newsletter</h2> </Titulo>
<Forme>
<form method="post" action="https://getform.io/f/e8fb3d9f-234e-4a26-901c-4dd1393d7a66">
  <label>
  <strong>Nombre</strong>
    <input type="text" name="name" id="name" placeholder="Nombre Completo"/>
  </label>
  <input type="hidden" name="subject" id="subject" value="newsletter"/>
  <label>
  <strong>Email</strong>
    <input type="email" name="email" id="email" placeholder="Correo Electronico"/>
  </label>
  
  
  <button type="submit">Suscribirme</button>
  
</form>
</Forme>


      <PostWrapper>
        {edges.map(({ node }) => {
          const { id, excerpt, frontmatter } = node;
          const { cover, path, title, date } = frontmatter;
          return (
            <PostList
              key={id}
              cover={cover.childImageSharp.fluid}
              path={path}
              title={title}
              date={date}
              excerpt={excerpt}
            />
          );
        })}
      </PostWrapper>
        <Titulo><h2>Últimas Publicaciones</h2></Titulo>

       <Calltoactbutton><Titulo><Link to="tags"><button type="button">All Tags</button></Link></Titulo></Calltoactbutton>
       
    </Layout>
  );
};

export default Index;

Index.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            excerpt: PropTypes.string,
            frontmatter: PropTypes.shape({
              cover: PropTypes.object.isRequired,
              path: PropTypes.string.isRequired,
              title: PropTypes.string.isRequired,
              date: PropTypes.string.isRequired,
              tags: PropTypes.array,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
};

export const query = graphql`
  query {
    allMarkdownRemark(
      limit: 6
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 75)
          frontmatter {
            title
            path
            tags
            date(formatString: "MM.DD.YYYY")
            cover {
              childImageSharp {
                fluid(
                  maxWidth: 1000
                  quality: 90
                  traceSVG: { color: "#2B2B2F" }
                ) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`;
