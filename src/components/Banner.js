export const Banner = () => { 
      return (
        <section className="banner" id="home">
            <Container>
                <Row className='align-items-center'>
                    <Col xs={12}md={6}xl={7}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1 >{`Hi I'm Nischal`} </h1>
                    </Col>
                </Row>
            </Container>
        </section>
      )

}