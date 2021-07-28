import React from "react";
import { articleData } from './ArticleData'
import { Card, Grid, Image } from 'semantic-ui-react';

import { FaFilePdf } from "react-icons/fa"
import "./ResourceCenter.css";

const Articles = () => {
    return (
        <div className="articles-section">
            {articleData &&
            articleData.map(article => {
                return (
                    <Grid columns={2} padded className="article">
                        <Grid.Row>
                            <Grid.Column className="article-block">
                                <Card>
                                    <Image src={article.img} wrapped ui={false} />
                                    <Card.Content>
                                        <a href={article.url} target="_blank" rel="noopener noreferrer" className="article-link">
                                            <Card.Header className="card-header">{article.name}&nbsp;<FaFilePdf/>
                                            </Card.Header>
                                        </a>
                                </Card.Content>
                                </Card>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                )}
            )}
        </div>
    ) 
};

export default Articles