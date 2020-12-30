import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";

const Hero = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={2}>
          <div class="window">
            <div class="santa">
              <div class="head">
                <div class="face">
                  <div class="redhat">
                    <div class="whitepart"></div>
                    <div class="redpart"></div>
                    <div class="hatball"></div>
                  </div>
                  <div class="eyes"></div>
                  <div class="beard">
                    <div class="nouse"></div>
                    <div class="mouth"></div>
                  </div>
                </div>
                <div class="ears"></div>
              </div>
              <div class="body"></div>
            </div>
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Hero;
